import { observer } from "mobx-react-lite";

export default observer(function LeaderBoardView(props) {
  return (
    <div className="leaderboard">
      <h1 className="text-2xl font-bold mt-4 mb-4 text-center">TOP 10</h1>
      <table className="w-full border-collapse mx-12 my-4">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left">Rank</th>
            <th className="py-2 px-4 border-b text-left">Username</th>
            <th className="py-2 px-4 border-b text-left">Score</th>
          </tr>
        </thead>
        <tbody>
          {props.leaderboard.map(transformToRowCB)}
        </tbody>
      </table>
      <div className="mt-4 text-center">
        <a href="#">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Back
          </button>
        </a>
      </div>
    </div>
  );

  function transformToRowCB(entry, index) {
    return (
      <tr key={index + 1}>
        <td className="py-2 px-4 border-b">{index + 1}</td>
        <td className="py-2 px-4 border-b">{entry.email}</td>
        <td className="py-2 px-4 border-b">{entry.highscore}</td>
      </tr>
    );
  }
});
           