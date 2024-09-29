import { observer } from "mobx-react-lite";
import InstructionsView from "../views/InstructionsView.jsx";
import students from "../students.js";

export default observer(function InstructionsPresenter(props) {
  return (
    <div>
      <InstructionsView students={students} />
    </div>
  );
});
