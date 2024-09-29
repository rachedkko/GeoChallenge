import firebaseConfig from "./firebaseConfig";
import { getDatabase, ref, get, set } from "firebase/database";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const path = "geoChallengeModel"

function createUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

function getSnapACB(snapshot) {
  return snapshot.val();
}

function modelToPersistence(model) {
  return model.user.highscore
}
 
function persistenceToModel(firebaseData, model) {
  model.user.highscore = (firebaseData)
  }

function saveToFirebase(model) {
  if(model.ready){
    if(model.user.highscore != undefined) set(ref(db, path+"/users/"+model.user?.uid), modelToPersistence(model))
  }
}

function readLeaderboard(){
  return get(ref(db, path+"/leaderboard")).then(getSnapACB)
}

function updateLeaderboard(array){
  set(ref(db, path+"/leaderboard"),array)
}

function readFromFirebase(model) {
  model.ready = false;
  return get(ref(db, path+"/users/"+model.user.uid)).then(convertACB).then(setModelReadyACB)

  function convertACB(snapshot){
      return persistenceToModel(snapshot.val(), model)
  }

  function setModelReadyACB(){
      model.ready=true;
  }
}

function connectToFirebase(model, watchFunction) {
  function checkACB(){
    return model.user.highscore;
}

function effectACB(){
    saveToFirebase(model)
}

readFromFirebase(model).then(() => {watchFunction(checkACB,effectACB)});
}


export {
  modelToPersistence,
  persistenceToModel,
  saveToFirebase,
  readFromFirebase,
  createUser,
  loginUser,
  connectToFirebase,
  readLeaderboard,
  updateLeaderboard
};
