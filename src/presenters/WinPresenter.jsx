import { observer } from "mobx-react-lite";
import WinView from "../views/WinView";

export default observer(function WinPresenter(props) {
  
    return (
      <div>
        <WinView model={props.model}/>
      </div>
    );
  });
  