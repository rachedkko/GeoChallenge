import { observer } from "mobx-react-lite";
import AboutView from "../views/AboutView";
import students from "../students";

export default observer(function AboutPresenter(props) {
  return (
    <div>
      <AboutView students={students} />
    </div>
  );
});
