export const N8N_URL = "https://admiral-zaio.app.n8n.cloud/webhook/student-feedback";
export const N8N_COPY_URL = "https://admiral-zaio.app.n8n.cloud/webhook-waiting/23?signature=676eeb4642eff48c2d303de6cc0390584fe46600839c52643e1772005e2ccdf9";

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