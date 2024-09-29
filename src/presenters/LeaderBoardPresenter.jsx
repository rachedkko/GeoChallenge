import LeaderBoardView from "../views/LeaderBoardView";
import { useEffect, useState } from "react";
import { readLeaderboard } from "../firebaseModel";

export default function LeaderBoardPresenter(props) {
  
  const [promise, setPromise] = useState(readLeaderboard);

  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(resolvePromiseACB, [promise]);
  
  function resolvePromiseACB() {
    setData(null);
    setError(null);
        
    promise.then(setDataACB).catch(setErrorACB);
    
    function setDataACB(d) {
      setData(d);
    }
    function setErrorACB(e) {
      setError(e);
    }
  }

  if(!promise){
    return 'leaderboard does not exist yet'
  }

  else if(!error && !data){
    return <div className="flex items-center justify-center">
        <img className="w-60 h-60" src="https://brfenergi.se/iprog/loading.gif"  />
      </div>;
  }

  else if(error){
    return <p>{error}</p>;
  }

  return (
    <LeaderBoardView
      leaderboard={data}
    />
  );
};