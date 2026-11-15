export const N8N_URL = "https://admiral-zaio.app.n8n.cloud/webhook/student-feedback";

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

export async function requestCopy(copyUrl, submission) {
  if (!copyUrl) {
    throw new Error("Copy URL unavailable");
  }

  const res = await fetch(copyUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      action: "copy",
      email: submission?.email,
      copyRequested: true,
    }),
  });

  if (!res.ok) {
    throw new Error("Copy request failed");
  }

  return res.json().catch(() => ({}));
}