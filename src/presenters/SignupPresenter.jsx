import { observer } from "mobx-react-lite";
import SignupView from "../views/SignUpView.jsx";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { createUser } from "../firebaseModel.js";
import { firebaseErrorTransformer } from "../utilities.js";
import { wrongToast, correctToast } from "../utils/callBack"

export default observer(function SignupPresenter(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  function onSubmitCustomEvt() {
    if (password.length < 8) {
      setErrorMsg("Password should be 8 characters minimum");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMsg("Passwords does not match");
      return;
    }

    createUser(email, password)
      .then((userCreds) => {
        correctToast("User Created, Redirecting to log in Page...")
        setTimeout(() => {
          window.location.hash = "/";
        }, 4000);
      })
      .catch((error) => {
        setErrorMsg(firebaseErrorTransformer(error.message));

        wrongToast(firebaseErrorTransformer(error.message))
      });
  }

  return (
    <div>
      <SignupView
        model={props.model}
        onSubmitCustomEvt={onSubmitCustomEvt}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        errorMsg={errorMsg}
        setErrorMsg={setErrorMsg}
      />
    </div>
  );
});
