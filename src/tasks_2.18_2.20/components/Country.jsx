import React, { useState } from "react";
import Weather from "./Weather";

const Country = ({ name, capital, population, languages, flagUrl }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>capital {capital}</p>
      <p>population {population}</p>
      <h3>languages</h3>
      <ul>
        {Object.values(languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={flagUrl} alt="No flag found" height="250" width="350" />
      <Weather capital={capital} />
    </div>
  );
};

export default Country;
