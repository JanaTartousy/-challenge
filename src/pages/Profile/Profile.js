import "./Profile.css"
import React from "react";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const isUnauthorized = location.state && location.state.unauthorized;

  return (
    <div>
      {isUnauthorized ? (
        <h1>Unauthorized</h1>
      ) : (
        <div>
          <h1>Profile</h1>
          <p>This is the user's profile.</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
