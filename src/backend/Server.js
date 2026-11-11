export const N8N_URL = "https://admiral-zaio.app.n8n.cloud/webhook/student-feedback";
export const N8N_COPY_URL = " https://admiral-zaio.app.n8n.cloud/webhook-waiting/24?signature=4504398d18824c0c3b75439081c41cee2f657dee4fb62a777cbae8611f2ca2ee";

export async function submitFeedback(payload) {
  const res = await fetch(N8N_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Submission failed");
  }

  return res.json().catch(() => ({}));
}

export async function requestCopy(payload) {
  const res = await fetch(N8N_COPY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      studentName: payload.studentName,
      email: payload.email,
      courseName: payload.courseName,
      rating: Number(payload.rating),
      feedbackMessage: payload.feedbackMessage,
    }),
  });

  if (!res.ok) {
    throw new Error("Copy request failed");
  }

  return res.json().catch(() => ({}));
}