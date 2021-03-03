import React from "react";
import "./Auth.scss";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../Common/LoginButton";
import LogoutButton from "../Common/LogoutButton";

const Auth = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <section className="page-auth">
      <div>{!isAuthenticated ? <LoginButton /> : <LogoutButton />}</div>
      <h1 className="welcome-text">
        Start Your <br />
        Journey Here!
      </h1>
    </section>
  );
};

export default React.memo(Auth);
