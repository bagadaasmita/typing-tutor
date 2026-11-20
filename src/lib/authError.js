export function getAuthErrorMessage(error) {
  const message = error instanceof Error ? error.message : "";

  if (/failed to fetch|fetch failed|networkerror|network request failed|name resolution/i.test(message)) {
    return "Could not reach the authentication server. Check your internet connection, verify the Supabase URL in .env.local, and make sure the Supabase project is active.";
  }

  return message || "Authentication failed. Please try again.";
}
