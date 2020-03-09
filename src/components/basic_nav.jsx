import React from "react";
import { UserConsumer } from "./userContext";

const LoggedInNav = () => {
  return (
    <UserConsumer>
      {({ user, logout }) => (
        <div>
          <p>
            Hello {user.name},you are loggedin with{" " + user.email}
          </p>
          <ul>
            <li>Dashboadr</li>
            <li onClick={logout}>Logout</li>
          </ul>
        </div>
      )}
    </UserConsumer>
  );
};

const LoggedOutNav = () => {
  return (
    <UserConsumer>
      {({ login }) => (
        <div>
          <p>Please Click The Button Below</p>
          <ul>
            <li onClick={login}>Login</li>
            <li>Register</li>
          </ul>
        </div>
      )}
    </UserConsumer>
  );
};

//main component
const BasicNav = () => {
  return (
    <UserConsumer>
      {({ isAuthonticated }) => (
        <>
          {isAuthonticated && <LoggedInNav />}
          {!isAuthonticated && <LoggedOutNav />}
        </>
      )}
    </UserConsumer>
  );
};
export default BasicNav;
