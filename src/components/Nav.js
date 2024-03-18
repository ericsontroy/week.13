//Using create-react-app, create a new React project. Create a LoginForm component that contains the following:
//Username and password input fields, an h3 that says Log In, with a border. Style the component using the default generated CSS file.
//Create a Navigation component that contains links styled like a navbar.
//The links don't have to go anywhere.
//Put the Navigation component at the top of the page and the LoginForm in the center of the page.
import React from "react";

function Nav() {
  return (
    <nav className="navBar">
      <ul>
        <li>Base Camp</li>
        <li>MidMountain</li>
        <li>Summit</li>
      </ul>
    </nav>
  );
}

export default Nav;
