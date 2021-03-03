import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton: React.FC = () => {
  const { logout } = useAuth0();
  return (
    <div 
      data-cy="logout-button"
      className="logout-button" 
      style={{cursor: "pointer", zIndex: 99}} 
      onClick={() => logout({ returnTo: window.location.origin + "/" })}>
      Log Out
    </div>
  );
};

export default LogoutButton;