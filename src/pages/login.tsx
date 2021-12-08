import type { NextPage } from "next";
import styles from "@/styles/Home.module.css";
import Auth from "@aws-amplify/auth";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";

const Login: NextPage = () => {
  const checkUser = async () => {
    const user = await Auth.currentAuthenticatedUser();
    console.log("user: ", user);
  };
  return (
    <div className={styles.container}>
      <button
        onClick={() =>
          Auth.federatedSignIn({
            provider: CognitoHostedUIIdentityProvider.Google,
          })
        }
      >
        Sign in with Google
      </button>
      <button onClick={() => Auth.federatedSignIn()}>Sign in</button>
      <button onClick={() => Auth.signOut()}>Sign Out</button>
      <button onClick={checkUser}>Check User</button>
    </div>
  );
};

export default Login;
