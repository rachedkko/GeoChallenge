function InstructionsView(props) {
  return (
    <div className="flex flex-col items-center w-[100%] h-[calc(100vh-4rem)] mt-20">
      <h1 className="text-4xl font-bold mb-4 tracking-wider">Instructions</h1>
      <p className="font-semibold text-md w-1/4 tracking-wide mb-8 leading-8">
        This is a geography game where you get the chance to guess the correct
        country. Each qustion about the country gives 4 chances of varying
        difficulty to get it right. It goes from hard to easier. First chance is
        the countries calling code, second chance is the countries currency,
        third chance is the geographical represantation of the country in a 2D
        map, and finally the easiest question the flag of the country. Each
        failed chance reduces the points by 20 points. If you manage to get the
        first question right that's a 100 points, the second 80 points, third 60
        points etc.
      </p>
      <div className="flex flex-col text-3xl font-semibold w-1/4 gap-8">
        <div className="flex flex-row justify-between">
          <p>1</p>
          <p>Calling Code</p>
          <p>100 pts</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>2</p>
          <p>Currency</p>
          <p>80 pts</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>3</p>
          <p>Map Geo </p>
          <p>60 pts</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>4</p>
          <p>Flag</p>
          <p>40 pts</p>
        </div>
      </div>
    </div>
  );
}

export default InstructionsView;
