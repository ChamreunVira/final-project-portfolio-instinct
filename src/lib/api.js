import { mockPosts, mockProjects } from "../data/data";

const apiBase = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

async function request(path, fallback) {
  try {
    const response = await fetch(`${apiBase}${path}`);
    if (!response.ok) throw new Error("The API did not return a successful response.");
    const data = await response.json();
    return Array.isArray(data) && data.length === 0 ? fallback : data;
  } catch {
    return fallback;
  }
}

export const getProjects = () => request("/projects", mockProjects);
export const getPosts = () => request("/posts", mockPosts);

export async function sendContact(payload) {
  try {
    const response = await fetch(`${apiBase}/contacts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      throw new Error(data.message || "Could not send your message. Please try again.");
    }

    return response.json();
  } catch (error) {
    if (error instanceof TypeError) throw new Error("The contact service is unavailable. Use the Telegram button or start the API.");
    throw error;
  }
}
