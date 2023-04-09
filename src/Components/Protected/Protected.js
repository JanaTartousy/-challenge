import React from "react";

const Protected = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return (
      <div>
        <h1>Unauthorized</h1>
        <p>Please log in to access this page</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome to your profile</h1>
      {children}
    </div>
  );
};

export default Protected;
