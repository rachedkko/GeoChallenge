function LoseView(props){
    return <div
    style={{ height: "calc(100vh - 4rem)", flexDirection: "column" }}
    className="flex justify-center items-center"
  >
    <h1 className="text-5xl font-bold italic py-10 px-20 rounded-lg ">
      GAME OVER
    </h1>
    <button
      className="text-5xl font-bold italic border-[#CCC] border py-10 px-20 rounded-lg hover:bg-gray-200 transition-all duration-300 ease-in"
      onClick={() => props.model.restartGame()}
    >
      TRY AGAIN
    </button>
  </div>
}


export default LoseView;