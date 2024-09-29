import { createRoot } from "react-dom/client";
import model from "./geoChallengeModel.js";
import { observable, configure, reaction } from "mobx";
import {connectToFirebase} from "./firebaseModel.js";

import App from "./App.jsx";
import react from "@heroicons/react";

// uncomment to make the app update when the model changes:
configure({ enforceActions: "never" }); // we don't use Mobx actions

// Bootstrapping the application
//
const user = localStorage.getItem("user");
if (user) {
  model.user = JSON.parse(user);
}


const reactiveModel = observable(model);

createRoot(document.getElementById("root")).render(
  <App model={reactiveModel} />,
); // mounts the app in the page DIV with the id "root"
// to see the DIV, look at react.html in the developer tools Sources
// react.html, with the content <div id="root"></div> is configured in vite.config.js

connectToFirebase(reactiveModel,reaction)
window.myModel = reactiveModel;