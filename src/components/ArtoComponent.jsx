import React, { useState } from "react";

const arto = {
  name: "Arto Hellas",
  age: 35,
  education: "Filosofian tohtori",
  greet: function () {
    console.log("hello, my name is", this.name);
  },

  doAddition: function (a, b) {
    console.log(a + b);
  },
};

arto.growOlder = function () {
  this.age += 1;
  console.log(this.age);
};

function ArtoComponent() {
  setTimeout(arto.greet, 1000); // sekunnin päästä tulostuu hello, "my name is"

  setTimeout(arto.greet.bind(arto), 1000); // sekunnin päästä tulostuu hello, "my name is Arto Hellas"

  // arto.doAddition.bind(arto);
  // arto.doAddition(1, 4); // tulostuu 5

  const referenceToAddition = arto.doAddition;
  const binded = referenceToAddition.bind(arto);
  // binded(10, 15); // tulostuu 25

  arto.greet();
  // useState is a hook, function imported from React
  const [age, setAge] = useState(arto.age);

  return (
    <div>
      <h3>Arto tehtävä</h3>
      <p>Name: {arto.name}</p>
      <p>Age: {age}</p>
      <p>Education: {arto.education}</p>
      <button
        onClick={() => {
          arto.growOlder();
          setAge(arto.age);
        }}>
        Increment age
      </button>
    </div>
  );
}

export default ArtoComponent;
