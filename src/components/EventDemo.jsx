import React, { useState } from "react";

const EventDemo = (props) => {
  const [value, setValue] = useState(10);

  return (
    <div>
      {value} <button onClick={() => setValue(value + 1)}>button</button>
    </div>
  );
};

export default EventDemo;
