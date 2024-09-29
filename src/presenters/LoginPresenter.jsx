import { observer } from "mobx-react-lite";
import LoginView from "../views/LoginView";
import { useState } from "react";
import { loginUser, connectToFirebase } from "../firebaseModel";
import { firebaseErrorTransformer } from "../utilities";

export default observer(function LoginPresenter(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  function onSubmitCustomEvt() {
    loginUser(email, password)
      .then((userCreds) => {
        const user = userCreds.user;
        props.model.loginUser(user.uid, email);
      })
      .catch((error) => {
        setErrorMsg(firebaseErrorTransformer(error.message));
      });
  }

  return (
    <div>
      <LoginView
        onSubmitCustomEvt={onSubmitCustomEvt}
        model={props.model}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        errorMsg={errorMsg}
        setErrorMsg={setErrorMsg}
      />
    </div>
  );
});
