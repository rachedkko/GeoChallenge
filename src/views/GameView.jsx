import countryList from "../countries.js";

import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import Select from "react-select";
import { ToastContainer } from "react-toastify";

export default observer(function GameView(props) {
  const handleGuessChange = (guess) => {
    props.onSelectedGuessCustomEvt(guess);
  };
  function conditionalRendering() {
    if(props.gameState.round === 0){
      return (
        <div >
        <div className="text-2xl">Correct ! Next Round ?</div>
      </div>);
    }
    if(props.gameState.round === 1){
      return (
        <div>
        <div className="text-2xl">Calling code :</div>
        <div className="text-2xl">{props.countryData.callingCode}</div>
      </div>);
    }
    if(props.gameState.round === 2){
      return (
        <div>
        <div className="text-2xl">Currency :</div>
        <div className="text-2xl">{props.countryData.currencyCodes[0]}</div>
      </div>);
    }

    if(props.gameState.round === 3){
      
      return(<div className="mb-4 flex items-center">
      <img
        className="h-[400px] block"
        id="myImage"
        src={`https://staging.teuteuf-assets.pages.dev/data/worldle/countries/${props.countryData.code.toLowerCase()}/vector.svg`}
        alt="Image"
      />
    </div>);
    }
    if(props.gameState.round === 4){
      return(<div className="mb-4 flex items-center">
      <img
        className="h-[400px] block"
        id="myImage"
        src={props.countryData.flagImageUri}
        alt="Image"
      />
    </div>);
    }
    
  }

  return (
    /*"curentUserID":"","currentCountry":"","gameState":{"round":1,"guess":"","distance":0,"direction":0,"end":false,"points":0*/
    <div className="flex justify-center pt-20 h-[calc(100vh-4rem)]">
      <ToastContainer />
      <div className="w-1/2 flex flex-col items-center">
        <div className="flex flex-row justify-center w-1/2">
          <Select
            styles={props.customStyles}
            className="w-full"
            placeholder="GUESS THE COUNTRY..."
            value={props.selectedGuess}
            onChange={handleGuessChange}
            options={countryList.map((countryItem) => {
              return {
                value: countryItem.countryCode,
                label: countryItem.country.toUpperCase(),
              };
            })}
            menuPlacement="top"
            
          />
          <button
            onClick={props.submitGuessCustomEvt}
            className="font-bold px-7 py-3 border-y-[#CCC] border-y border-r-[#CCC] border-r rounded-r hover:bg-gray-200 transition-all duration-300 ease-in"
          >
            GUESS
          </button>
        </div>

        <div className="w-1/2 flex mt-4 mb-8 justify-between">
          <div className="text-m font-semibold italic">
            CURRENT POINTS : {props.gameState.points}
          </div>
          <div className="text-m font-semibold italic">
            STREAK :{" " + props.gameState.streak}
            {props.gameState.streak > 3
              ? "🔥"
              : ""}
          </div>
          <div className="text-m font-semibold italic">
            YOUR HIGHSCORE : {props.highscore}
          </div>
        </div>

        <div className="flex flex-col h-[500px] items-center mb-10 border rounded-lg py-6 px-1 w-1/3 ">
          {/*
            <div className="text-xl">
              Country code {props.model.countryData.callingCode}
            </div>
          */}
          {conditionalRendering()}
          <div className="font-bold italic text-md ">
            {100 - props.gameState.guesses.length * 20} POINTS
          </div>
        </div>

        <div className="flex border w-6/12 mb-10">
          <table className="w-full">
            <thead>
              <tr className="text-center text-sm font-semibold italic ">
                <td>Round</td>
                <td>Guess</td>
                <td>Distance</td>
                <td>Direction</td>
              </tr>
            </thead>
            <tbody>
              {props.gameState.guesses?.map((item) => {
                const rotation = Math.floor(item.direction) + "deg";
                return (
                  <tr key={item.round}>
                    <td className="text-center px-5">{item.round}</td>
                    <td className="text-center px-5">{item.guess.charAt(0).toUpperCase() + item.guess.slice(1).toLowerCase()}</td>
                    <td className="text-center px-5">{item.distance}</td>
                    <td className="flex justify-center items-center font-bold text-center px-5 h-10">
                      <img
                        style={{
                          color: "red",
                          rotate: rotation,
                        }}
                        src="https://www.svgrepo.com/show/28104/arrow-pointing-to-up.svg"
                        alt="arrow"
                        className="h-4"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-5">

          <button
            className="mb-7 font-bold px-7 py-3 border-[#CCC] border rounded hover:bg-gray-200 etransition-all duration-300 ease-in"
            
            onClick={() => {
              props.gameState.started = false;
            }}
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );


});

// test

