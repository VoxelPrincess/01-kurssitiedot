import React, { useState } from "react";

const anecdotes = [
  "If it hurts, do it more often.",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
  "The only way to go fast, is to go well.",
];

function Anecdote() {
  const [randomSelected, setRandomSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const mostVotedIndex = votes.indexOf(Math.max(...votes));
  console.log("rerendering...", anecdotes.length, randomSelected);

  return (
    <div>
      <h3>Anecdote of the day</h3>
      <div>{anecdotes[randomSelected]}</div>
      <button
        type="button"
        onClick={() => {
          const clone = [...votes];
          clone[randomSelected] += 1;
          setVotes(clone);
        }}>
        Vote
      </button>{" "}
      <button
        type="button"
        onClick={() => {
          const randomIndex = Math.floor(Math.random() * anecdotes.length);
          setRandomSelected(randomIndex);
        }}>
        Next anecdote
      </button>
      <h3>Anecdote of the day</h3>
      <div>{anecdotes[mostVotedIndex]}</div>
      <div>Votes: {votes[mostVotedIndex]}</div>
    </div>
  );
}

export default Anecdote;
