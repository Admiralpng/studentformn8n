import React, { useState, useContext, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { HomeContainer, Field } from '../styles/home.styled'
import { ModalContext } from '../contexts/ModalContext'
import { ErrorFormModal } from '../components/Modal/ErrorFormModal'

const courses = [
    'Graphic Design & Media',
    'Data Science',
    'Software Development',
    'Cybersecurity',
    'Digital Marketing',
]
const ratings = ['1', '2', '3', '4', '5']

const Dropdown = ({ name, label, options, value, onChange }) => {
    const [open, setOpen] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className="select-field" ref={ref}>
            <input type="hidden" name={name} value={value} />
            <details open={open} onToggle={(event) => setOpen(event.currentTarget.open)}>
                <summary>{value || label}</summary>
                <ul className="options">
                    {options.map((opt) => (
                        <li key={opt}>
                            <button
                                type="button"
                                onClick={() => {
                                    onChange(opt)
                                    setOpen(false)
                                }}
                            >
                                {opt}
                            </button>
                        </li>
                    ))}
                </ul>
            </details>
        </div>
    )
}

export const Home = () => {
    const navigate = useNavigate()
    const { handleModal } = useContext(ModalContext)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        course: '',
        question: '',
        rating: '',
        feedback: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { firstName, lastName, emailAddress, course, question, rating, feedback } = formData
        const allFilled = [firstName, lastName, emailAddress, course, question, rating, feedback]
            .every((v) => v.trim() !== '')

        if (!allFilled) {
            handleModal(<ErrorFormModal />)
            return
        }

        navigate('/form-submitted')
    }

    return (
        <HomeContainer>
            <form id="feedbackForm" onSubmit={handleSubmit}>
                <section>
                    <Field>
                        <h2>Student Information:</h2>
                        <div className="field-inputs">
                            <label htmlFor="firstName"><p>First Name:</p></label>
                            <input type="text" id="firstName" name="firstName" placeholder="Enter First Name" value={formData.firstName} onChange={handleChange} />
                            <label htmlFor="lastName"><p>Last Name:</p></label>
                            <input type="text" id="lastName" name="lastName" placeholder="Enter Last Name" value={formData.lastName} onChange={handleChange} />
                            <label htmlFor="emailAddress"><p>Email Address:</p></label>
                            <input type="text" id="emailAddress" name="emailAddress" placeholder="Enter Email Address" value={formData.emailAddress} onChange={handleChange} />
                        </div>
                    </Field>
                </section>
                <section>
                    <Field>
                        <h2>Questionnaire:</h2>
                        <div className="field-inputs">
                            <p>What course were you enrolled in?</p>
                            <Dropdown name="course" label="Select a course" options={courses} value={formData.course} onChange={(val) => setFormData((p) => ({ ...p, course: val }))} />
                            <p>What was gained from this course?</p>
                            <textarea name="question" placeholder="Answer question." value={formData.question} onChange={handleChange} />
                            <p>On a scale from 1 - 5 how would you rate this course experience? </p>
                            <Dropdown name="rating" label="Select a rating" options={ratings} value={formData.rating} onChange={(val) => setFormData((p) => ({ ...p, rating: val }))} />
                            <p>Feedback Message</p>
                            <textarea name="feedback" placeholder="Enter your feedback here. Please also note a solution to any given problem(s)." value={formData.feedback} onChange={handleChange} />
                        </div>
                    </Field>
                    <button type="submit">Submit Form</button>
                </section>
            </form>
            <span className="Mark"><small><strong>StackBinder Forms</strong></small></span>
        </HomeContainer>
    )
}
