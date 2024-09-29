import { observer } from "mobx-react-lite";
import GameView from "../views/GameView";
import { useState,useEffect } from "react";

import gameViewStyles from "../styles/gameViewStyles";
import { wrongToast, correctToast } from "../utils/callBack"

export default observer(function GamePresenter(props) {
  const [selectedGuess, setSelectedGuess] = useState();
  const [highscore, setHighscore] = useState(props.model.user.highscore);
  const [lastGuessTime, setLastGuessTime] = useState(0);

  useEffect(() => {
    setHighscore(Math.max(highscore,props.model.gameState.points))
    props.model.highscore = props.model.gameState.points
  },[props.model.gameState.points])

  function onSelectedGuessCustomEvt(guess) {
    setSelectedGuess(guess);
  }

  function generateNewCountryCustomEvt() {
    props.model.loose();
    props.model.generateNewCountry();
  }

  function submitGuessCustomEvt() {
    if(Date.now() - lastGuessTime < 1000){
      return;
    }
    setLastGuessTime(Date.now());
    props.model.setGuessName(selectedGuess?.label);
    const guess = selectedGuess?.value;
    if (!guess) {
      wrongToast("Please choose a country!")
      return;
    }

    props.model.submitGuess(guess,() => correctToast("That's Right !"), () => wrongToast("Sorry, thats incorrect"));
  }

  if(!props.model.countryDataPromiseState.promise){
    return 'no data'
  }

  else if((!props.model.countryDataPromiseState.error && !props.model.countryDataPromiseState.data) || !props.model.user){
    return <div className="flex items-center justify-center">
      <img className="w-60 h-60" src="https://brfenergi.se/iprog/loading.gif"  />
      </div>;
     
  }

  else if(props.model.countryDataPromiseState.error){
    return <p>{props.model.countryDataPromiseState.error}</p>;
  }

  return (
    <div>
      <GameView
        generateCountry={generateNewCountryCustomEvt}
        submitGuessCustomEvt={submitGuessCustomEvt}
        gameState={props.model.gameState}
        countryData={props.model.countryDataPromiseState.data.data}
        customStyles={gameViewStyles}
        selectedGuess={selectedGuess}
        onSelectedGuessCustomEvt={onSelectedGuessCustomEvt}
        highscore={highscore}
      />
    </div>
  );
});
