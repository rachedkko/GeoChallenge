function AboutView(props) {
  return (
    <div className="flex flex-col justify-center items-center w-[100%] h-[calc(100vh-4rem)] gap-4">
      <h1 className="text-3xl font-semibold mb-4 tracking-wider">
        Project Group 35
      </h1>
      <p className="font-semibold text-md tracking-wide mb-8">
        This is our project Geo Challenge, a geography guesser type of game made
        for the course DH2642 Interaction Programming and the Dynamic (HT23) and
        this was made by us
      </p>
      <div className="w-1/3 border flex gap-8 items-center justify-between flex-col">
        {props.students.map((student) => (
          <div key={student.email} className="flex items-center w-full gap-56">
            <div className="">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1024px-Default_pfp.svg.png"
                alt=""
                height="100px"
                width="100px"
              />
            </div>
            <div>
              <p className="font-semibold text-md">{student.name}</p>
              <p className="font-semibold text-md">{student.university}</p>
              <p className="font-semibold text-md">{student.email}</p>
              <p className="font-semibold text-md">{student.country}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutView;
