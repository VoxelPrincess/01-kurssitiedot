import React from "react";

const Hello = (props) => {
  const nimi = "Pekka";
  const ika = 10;
  const { counter } = props;

  const bornYear = (age) => new Date().getFullYear() - age;

  const Greeting = ({ name, age }) => (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born {bornYear(age)}</p>
    </div>
  );

  return (
    <div>
      <h3>Greetings</h3>
      <Greeting name="Maya" age={26 + 10} />
      <Greeting name={nimi} age={ika} />
      <div>{counter}</div>
    </div>
  );
};

export default Hello;
