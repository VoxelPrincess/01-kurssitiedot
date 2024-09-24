import React, { useState } from "react";

const EventDemo = (props) => {
  const [value, setValue] = useState(10);

  return (
    <div>
      {value}
      <button onClick={() => console.log("clicked the button")}>button</button>
    </div>
  );
};

export default EventDemo;
