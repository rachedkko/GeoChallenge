import { ToastContainer, toast } from "react-toastify";

function wrongToast(msg){

    return toast.error(msg, {
      position: "top-left",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }



  function correctToast(msg){

    return toast.success(
      msg,
      {
        position: "top-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      },
    );
  }


export { wrongToast, correctToast };