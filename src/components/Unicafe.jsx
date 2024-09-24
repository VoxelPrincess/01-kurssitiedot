import { useState } from "react";

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;

const StatisticsRow = ({ type, value }) => (
  <tr>
    <td>{type}</td>
    <td>{value}</td>
  </tr>
);

const StatisticsTable = (props) => {
  if (props.allClicks.length === 0) {
    return <div>No feedback given</div>;
  }

  return (
    <table>
      <tbody>
        <StatisticsRow type="good" value={props.good} />
        <StatisticsRow type="neutral" value={props.neutral} />
        <StatisticsRow type="bad" value={props.bad} />
        <StatisticsRow type="all" value={props.allClicks.length} />
        <StatisticsRow type="averagee" value={props.average} />
        <StatisticsRow type="positive" value={`${props.positive}%`} />
      </tbody>
    </table>
  );
};

const Unicafe = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAll] = useState([]);
  const average = allClicks.length > 0 ? (good - bad) / allClicks.length : 0;
  const positive = allClicks.length > 0 ? (good / allClicks.length) * 100 : 0;

  const handleGoodClick = () => {
    setAll([...allClicks, "g"]);
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setAll([...allClicks, "n"]);
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setAll([...allClicks, "b"]);
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give geedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <h2>Statistics</h2>
      <StatisticsTable
        good={good}
        neutral={neutral}
        bad={bad}
        allClicks={allClicks}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default Unicafe;
