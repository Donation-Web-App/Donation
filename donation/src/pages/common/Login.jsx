import { Page } from "../../components";
import { LoginForm } from "../../components/LoginForm";

export function Login() {
  return (
    <Page>
      <div className="h-screen w-full flex items-center justify-center">
        <LoginForm />
      </div>
    </Page>
  );
}
