import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext.js';
import { LogoIcon, DarkIcon, LightIcon } from '../assets/Icons.jsx';
import { HeaderContainer } from '../styles/components styles/header.styled';

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <HeaderContainer>
            <section>
                <div className="vivid-bg" aria-hidden="true"></div>
                <Link to="/"><h1>StackBinder</h1></Link>
                <h2>TERTIARY STUDENT FEEDBACK FORM</h2>
            </section>
            <div>
                <LogoIcon className="logo" />
                <span onClick={toggleTheme} className="toggle-button">
                    {theme === "dark" ? <DarkIcon /> : <LightIcon />}
                </span>
            </div>
        </HeaderContainer>
    )
}

export default Header