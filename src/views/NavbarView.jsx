import { observer } from "mobx-react-lite";
export default observer(function NavbarView(props) {
  function onClickHandlerACB() {
    props.model.logoutUser();
  }
  return (
    <div>
      <nav className="flex justify-between text-lg items-center px-4 w-full border h-16">
        <div>
          <a href="#">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 hover:stroke-green-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
              />
            </svg>
          </a>
        </div>
        <div className="flex">
          <div>
            <a href="#about" className="hover:text-green-400 px-5">
              About
            </a>
          </div>
          <div>
            <a href="#leaderboard" className="hover:text-green-400 px-5">
              Leaderboard
            </a>
          </div>
          <div>
            <a href="#instructions" className="hover:text-green-400 px-5">
              Instructions
            </a>
          </div>
        </div>
        <div className="flex">
          <div className="hover:text-green-400 px-2">
            {props.model?.user?.email || <a href="#">Login</a>}
          </div>
          <div className={`${props.model?.user?.uid ? "" : "hidden"}`}>
            <a
              href="#"
              className="hover:text-green-400 px-2"
              onClick={onClickHandlerACB}
            >
              Logout
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
});
