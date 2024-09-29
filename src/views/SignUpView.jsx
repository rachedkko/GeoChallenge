import { ToastContainer } from "react-toastify";

function SignupView(props) {
  function onSubmitHandler(e) {
    e.preventDefault();
    props.onSubmitCustomEvt();
    // console.log(props.email);
    // console.log(props.password);
    // console.log(props.confirmPassword);
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4 p-10 border-slate-50 w-full h-[calc(100vh-4rem)]">
      <ToastContainer />
      <h1 className="text-3xl font-bold mb-4 tracking-wider">Sign Up</h1>

      <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
        <label className="font-bold text-sm text-red-400">
          {props.errorMsg}
        </label>

        <div className="flex flex-col">
          <label className="text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className={`p-2 lg:p-3 bg-darkgray text-sm w-[325px] lg:w-[425px] rounded-lg focus-within:bg-darkgray ${
              props.errorMsg
                ? "border-2 border-red-400 bg-red-100 focus:roder-red-400"
                : "border-[1px]"
            }`}
            id="email"
            type="email"
            onChange={(e) => {
              props.setEmail(e.target.value);
              props.setErrorMsg("");
            }}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className={`p-2 lg:p-3 bg-darkgray text-sm w-[325px] lg:w-[425px] rounded-lg focus-within:bg-darkgray ${
              props.errorMsg
                ? "border-2 border-red-400 bg-red-100 focus:roder-red-400"
                : "border-[1px]"
            }`}
            id="password"
            type="password"
            onChange={(e) => {
              props.setPassword(e.target.value);
              props.setErrorMsg("");
            }}
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-bold mb-2" htmlFor="confirm_password">
            Confirm Password
          </label>
          <input
            className={`p-2 lg:p-3 bg-darkgray text-sm w-[325px] lg:w-[425px] rounded-lg focus-within:bg-darkgray ${
              props.errorMsg
                ? "border-2 border-red-400 bg-red-100 focus:roder-red-400"
                : "border-[1px]"
            }`}
            id="confirm_password"
            type="password"
            onChange={(e) => {
              props.setConfirmPassword(e.target.value);
              props.setErrorMsg("");
            }}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="flex items-baseline justify-between">
          <button
            type="submit"
            className="text-md font-medium text-white bg-blue-600 py-2 px-4 rounded-md select-none transition-all hover:bg-blue-800"
          >
            Sign up
          </button>
          {
            // <img
            //   src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
            //   alt=""
            // />
          }

          <a
            href="#"
            className="hover:text-blue-500 text-gray-500 underline text-sm block"
          >
            Already have an account? Log in
          </a>
        </div>
      </form>
    </div>
  );
}

export default SignupView;