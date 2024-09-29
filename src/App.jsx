import { observer } from "mobx-react-lite";
import "./index.css";
import SignupPresenter from "./presenters/SignupPresenter";
import LoginPresenter from "./presenters/LoginPresenter";
import LeaderBoardPresenter from "./presenters/LeaderBoardPresenter";
import { createHashRouter, RouterProvider } from "react-router-dom";
import NavbarView from "./views/NavbarView";
import GamePresenter from "./presenters/GamePresenter";
import AboutPresenter from "./presenters/AboutPresenter";
import InstructionsPresenter from "./presenters/InstructionsPresenter";
import WinPresenter from "./presenters/WinPresenter"
import LosePresenter from "./presenters/LosePresenter";
function makeRouter(model) {
  let element;
  if (model.user?.uid) {
    if (model.gameState.started) {
      if (model.gameState.end) {
        if (model.gameState.goodGuess) {
          element = <WinPresenter model={model}/>
        } else {
          element = <LosePresenter model={model}/>
        }
      } else {
        element = <GamePresenter model={model} />;
      }
    } else
      element = (
        <div
          style={{ height: "calc(100vh - 4rem)" }}
          className="flex justify-center items-center"
        >
          <button
            className="text-5xl font-bold italic border-[#CCC] border py-10 px-20 rounded-lg hover:bg-gray-200 transition-all duration-300 ease-in"
            onClick={() => model.startGame()}
          >
            START GAME
          </button>
        </div>
      );
  } else {
    element = <LoginPresenter model={model} />;
  }
  return createHashRouter([
    {
      path: "/",
      element: element,
    },
    {
      path: "/signup",
      element: <SignupPresenter model={model} />,
    },
    {
      path: "/leaderboard",
      element: <LeaderBoardPresenter/>,
    },
    {
      path: "/instructions",
      element: <InstructionsPresenter model={model} />,
    },
    {
      path: "/about",
      element: <AboutPresenter model={model} />,
    },
  ]);
}

export default observer(function ReactRoot(props) {
  return (
    <div className="flex flex-col">
      <NavbarView model={props.model} />
      <RouterProvider router={makeRouter(props.model)} />
    </div>
  );
});
