// Base URL for the API server artifact.
// In the Replit proxy, each artifact is served at its slug path.
// The API server slug is "api-server", so requests go to /api-server/api/...
const API_BASE =
  typeof window !== "undefined"
    ? `${window.location.origin}/api-server/api`
    : "/api-server/api";

// Ping the API server with a device UUID the first time a user answers a
// question. The server logs unique device counts to the Replit console.
export function pingUserCount(deviceId: string, subject: string): void {
  fetch(`${API_BASE}/ping`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ deviceId, subject }),
  }).catch(() => {
    // Best-effort — ignore network failures
  });
}
