import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div
      className="login-title"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </div>
  );
};

export default LoginButton;