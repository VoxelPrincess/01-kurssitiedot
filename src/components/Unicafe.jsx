import "./Unicafe.css";
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
  const [allPoints, setAllPoints] = useState([]);
  const average = allPoints.length > 0 ? (good - bad) / allPoints.length : 0;
  const positive = allPoints.length > 0 ? (good / allPoints.length) * 100 : 0;

  const handleGoodClick = () => {
    setAllPoints([...allPoints, "good"]);
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setAllPoints([...allPoints, "neutral"]);
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setAllPoints([...allPoints, "bad"]);
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give geedback</h1>
      <div className="button-group">
        <Button handleClick={handleGoodClick} text="good" />
        <Button handleClick={handleNeutralClick} text="neutral" />
        <Button handleClick={handleBadClick} text="bad" />
      </div>
      <h2>Statistics</h2>
      <StatisticsTable
        good={good}
        neutral={neutral}
        bad={bad}
        allClicks={allPoints}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default Unicafe;
