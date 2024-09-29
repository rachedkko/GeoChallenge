import { observer } from "mobx-react-lite";
import LoseView from "../views/LoseView";

export default observer(function WinPresenter(props) {
  
    return (
      <div>
        <LoseView model={props.model}/>
      </div>
    );
  });