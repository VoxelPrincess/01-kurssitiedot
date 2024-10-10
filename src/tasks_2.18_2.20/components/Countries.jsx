import React, { useState } from "react";
import Country from "./Country";
import CountrySimple from "./CountrySimple";

const Countries = ({ countries, newSearch }) => {
  const [showCountry, setShowContry] = useState();

  const show = (event) => {
    console.log(event.target.value);
    const cont = countries.filter((country) => country.name.common.includes(event.target.value));
    console.log("cont: ", cont);
    setShowContry(cont[0]);
  };

  const entries = countries.filter((country) => country.name.common.toUpperCase().includes(newSearch.toUpperCase()));

  if (entries.length >= 10) {
    return <p>Too many matches, specify another filter</p>;
  }
  if (showCountry !== undefined) {
    return (
      <Country
        key={showCountry.name.common}
        name={showCountry.name.common}
        capital={showCountry.capital[0]}
        population={showCountry.population}
        languages={showCountry.languages}
        flagUrl={showCountry.flags.png}
      />
    );
  }
  if (entries.length > 1) {
    return (
      <ul>
        {countries
          .filter((country) => country.name.common.toUpperCase().includes(newSearch.toUpperCase()))
          .map((country) => (
            <CountrySimple key={country.name.common} name={country.name.common} country={country} show={show} />
          ))}
      </ul>
    );
  }

  return (
    <ul>
      {countries
        .filter((country) => country.name.common.toUpperCase().includes(newSearch.toUpperCase()))
        .map((country) => (
          <Country
            key={country.name.common}
            name={country.name.common}
            capital={country.capital}
            population={country.population}
            languages={country.languages}
            flagUrl={country.flag}
          />
        ))}
    </ul>
  );
};

export default Countries;
