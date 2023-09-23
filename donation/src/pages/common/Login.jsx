import { Page } from "../../components";
import { LoginForm } from "../../components/LoginForm";

export function Login() {
  return (
    <Page>
      <div className="h-full w-full flex items-center justify-center">
        <LoginForm />
      </div>
    </Page>
  );
}
