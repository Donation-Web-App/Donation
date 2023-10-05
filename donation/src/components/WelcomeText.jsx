export function WelcomeText() {
  const firstName = window.localStorage.getItem("firstName");
  return <p className="text-lg font-semibold">Welcome, {firstName}.</p>;
}
