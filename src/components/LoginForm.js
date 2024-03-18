//Using create-react-app, create a new React project. Create a LoginForm component that contains the following:
//Username and password input fields, an h3 that says Log In, with a border. Style the component using the default generated CSS file.
//Create a Navigation component that contains links styled like a navbar.
//The links don't have to go anywhere.
//Put the Navigation component at the top of the page and the LoginForm in the center of the page.

import React from "react";

export const LoginForm = () => {
  return (
    <form className="card">
      <h3>Log In</h3>
      <label for="username">Username </label>
      <input
        type="username"
        placeholder="UserName"
        id="username"
        name="username"
      ></input>

      <label for="password">Password </label>
      <input
        type="password"
        placeholder="Password"
        id="password"
        name="password"
      ></input>

      <button type="submit"> Submit</button>
    </form>
  );
};
