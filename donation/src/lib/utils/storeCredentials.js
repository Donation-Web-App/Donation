export function storeCredentials(tokenValue, firstName, userRole) {
  // Token expires in 30 days
  // Setting 60 seconds to conservatively factor in latency
  const tokenExpiration = Date.now() + 24 * 60 * 60 * 1000 - 60000;

  // Store token and credentials
  window.localStorage.setItem("tokenValue", tokenValue);
  window.localStorage.setItem("firstName", firstName);
  window.localStorage.setItem("userRole", userRole);
  window.localStorage.setItem("tokenExpiration", tokenExpiration);
}
