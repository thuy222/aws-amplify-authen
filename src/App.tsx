import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Amplify, Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator, Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsconfig);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Authenticator>
        {({ signOut, user }) => (
          <div className="App">
            <p>
              Hey {user && user.username}, welcome to my channel, with auth!
            </p>
            <button onClick={signOut}>Sign out</button>
          </div>
        )}
      </Authenticator>
      <h2>App Content</h2>
    </div>
  );
}

export default withAuthenticator(App);
