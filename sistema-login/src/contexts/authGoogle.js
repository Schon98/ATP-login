import { createContext, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../services/configFirebase"; 
const provider = new GoogleAuthProvider();


export const GoogleAuthContext = createContext ({})


export function GoogleAuthProvider({ children }) {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  const signinInGoogle = () => {

    signInWithPopup(auth, provider)
      .then((result) => {

        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
      })

      .catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email;

        const credential = GoogleAuthProvider.credentialFromError(error);

      });
  };
  return;
  <AuthGoogleContext.Provider
    value={{}}></AuthGoogleContext.Provider>;
}
