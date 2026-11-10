const N8N_URL = "https://admiral-zaio.app.n8n.cloud/webhook-test/student-feedback";

async function submitFeedback(event) {
  event.preventDefault();
  const form = event.target;

  const payload = {
    studentName: form.studentName.value,
    email: form.email.value,
    courseName: form.courseName.value,
    rating: Number(form.rating.value),
    feedbackMessage: form.feedbackMessage.value,
  };

  const res = await fetch(N8N_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  alert(data.message); // "Thank you for your feedback! ..."
}

document.querySelector("#feedbackForm").addEventListener("submit", submitFeedback);