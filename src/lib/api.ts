export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "") || "";

export const apiUrl = (path: string) => `${API_BASE_URL}${path}`;

export async function postJson<T>(path: string, payload: unknown): Promise<T> {
  const response = await fetch(apiUrl(path), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const raw = await response.text();

  let result: T | null = null;
  if (raw) {
    try {
      result = JSON.parse(raw) as T;
    } catch {
      throw new Error("Server returned HTML instead of JSON. Please verify the PHP API files are deployed in the /api folder.");
    }
  }

  if (!response.ok) {
    const message = (result as { message?: string } | null)?.message || "Request failed. Please try again.";
    throw new Error(message);
  }

  return (result ?? ({} as T));
}
