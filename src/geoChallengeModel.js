// Example model
import { computeDistance , computeArrowDirectionDegrees} from "./utilities.js";
import { getCountry, getCountryPlace, generateCode } from "./countrySouce";
import resolvePromise from "./resolvePromise"
import {reaction} from "mobx"
import { connectToFirebase, updateLeaderboard,readLeaderboard } from "./firebaseModel.js";

export default {
  // Example: user: {uid: "dafc81432#$8", email: "test@gmail.com", highscore: "99"}
  user: {},
  currentCountry: {
    code :"",
    latitude: 0,
    longitude: 0,
  },
  currentGuess: {
    name: "",
    latitude: 0,
    longitude: 0,
  },
  
  countryDataPromiseState: {},
  gameState: {
    started: false,
    points: 0,
    streak: 0,
    end: false,
    round: 0,
    guesses: [],
    goodGuess: false,
    /*
     * Example element inside guesses array
     * [
     * {
     *   round: 1,
     *   country: "",  // wrong country guess
     *   distance: 0,
     *   direction: 45, // in degrees, will move the arrow to the correct direction 0 degrees will point to 12:00
     * },
     * {
     *   round: 2,
     *   country: "", // wrong country guess
     *   distance: 0,
     *   direction: 45, // in degrees, will move the arrow to the correct direction 0 degrees will point to 12:00
     * },
     */
  },

  // {email:highscore}
  leaderboard:[ ],

  nextRound() {
    this.gameState.round++;
    if (this.gameState.round > 4) {
      //game over
      this.checkLeaderboard().then(()=>{
        // check if current point larger than highscore
        if (this.gameState.points > this.user.highscore || !this.user.highscore)
          {
            this.user.highscore = this.gameState.points 
          }
        this.gameState.end = true;
        this.gameState.streak = 0;
        this.gameState.points = 0;
      })
    }},

  arrayContainsObject(array, objToCheck){
    return array.some( obj => obj.email===objToCheck.email && obj.highscore===objToCheck.highscore)
  },
  checkLeaderboard(){
    // check if highscore can make it to the leaderboard
    return readLeaderboard().then((leaderboardFirebase) => {
      const entryCandidate = {email:this.user.email, highscore:this.gameState.points}
      
      // check if it can make it to the leaderboard
      if((((entryCandidate.highscore > leaderboardFirebase[leaderboardFirebase.length-1].highscore) || leaderboardFirebase.length < 10) && !this.arrayContainsObject(leaderboardFirebase,entryCandidate)) )
      {
        leaderboardFirebase.push(entryCandidate)
        leaderboardFirebase = leaderboardFirebase.sort((entryA,entryB) => entryB.highscore-entryA.highscore).slice(0,10)
        return leaderboardFirebase
      }
      else return null
    }).then((checkedLeaderboard) => {
      // if the leaderboard changed then update it
      if (checkedLeaderboard!=null) updateLeaderboard(checkedLeaderboard)
    })
  },

  setGuessName(name) {
    this.currentGuess.name = name;
  },

  submitGuess(guess,correctToastCallback,wrongToastCallback) {
    if(this.gameState.goodGuess){
      return;
    }
    if (guess === this.currentCountry.code) {
      correctToastCallback();
      const pts = 100 - this.gameState.guesses.length * 20;
      this.gameState.points += pts;
      this.gameState.streak++;
      this.gameState.round = 0;
      this.gameState.goodGuess = true;
      this.gameState.end = true;
      return true
    } else {
      wrongToastCallback();
      getCountryPlace(guess).then((data) => {
        this.currentGuess.latitude = data.data[0].latitude;
        this.currentGuess.longitude = data.data[0].longitude;
        this.gameState.guesses.push({
          round: this.gameState.guesses.length + 1,
          guess: this.currentGuess.name,
          //compute distance between guess and correct country
          distance:  computeDistance(this.currentCountry.latitude, this.currentCountry.longitude, this.currentGuess.latitude, this.currentGuess.longitude) + " km",
          direction: computeArrowDirectionDegrees( this.currentGuess.latitude, this.currentGuess.longitude,this.currentCountry.latitude, this.currentCountry.longitude)
          
        });
        this.nextRound();


      },)
      return false;
      
      //this.gameState.direction = computeArrowDirection(0, 0, 0, 0);
      //this.gameState.distance = computeDistance(0, 0, 0, 0);
      //update direction and distance
    }
  },

  startGame() {
    // Add all bootstrapping here
    if(!this.countryDataPromiseState.data){
      this.generateNewCountry();
      this.gameState.guesses = [];
    }
    this.gameState.end = false;
    this.gameState.started = true;
    this.gameState.goodGuess = false;
    //this.gameState.points = 0;
  },

  loose(){
    //this.gameState.points = 0
    this.gameState.streak = 0;
  },

  restartGame(){
    this.generateNewCountry();
    this.gameState.guesses = [];
    this.gameState.end = false;
    this.gameState.started = true;
    this.gameState.goodGuess = false;
  },
  
  loginUser(uid, email) {
    this.user.uid = uid;
    this.user.email = email;
    localStorage.setItem("user", JSON.stringify(this.user));
    this.gameState.guesses = [];
    this.gameState.started = false;
    connectToFirebase(this, reaction)
  },

  logoutUser() {
    this.user = {};
    localStorage.removeItem("user");

  },

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },

  generateNewCountry() {
    this.gameState.goodGuess = false;
    this.gameState.guesses = [];
    
    this.currentCountry.code=generateCode();
    resolvePromise(getCountry(this.currentCountry.code),this.countryDataPromiseState);
    this.gameState.round = 1
    
    this.sleep(1500).then(() => getCountryPlace(this.currentCountry.code).then((data) => {
      this.currentCountry.longitude = data.data[0].longitude;
      this.currentCountry.latitude = data.data[0].latitude;
      ;}));
  },
};
