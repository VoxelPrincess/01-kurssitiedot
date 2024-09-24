import React from "react";
import Part from "./Part";

const Content = ({ parts }) => {
  const x = 1;
  let y = 5;

  console.log(x, y); // выводит 1, 5
  y += 10;
  console.log(x, y); // выводит 1, 15
  y = "teksti";
  console.log(x, y); // выводит 1, teksti

  // try {
  //   x = 4; // это вызовет ошибку, потому что x объявлен через const
  // } catch (error) {
  //   console.error("Произошла ошибка:", error.message); // перехватываем ошибку и выводим сообщение
  // }

  // Table
  const t = [1, -1, 3];

  console.log(t.length); // tulostuu 3
  console.log(t[1]); // tulostuu -1

  t.push(5); // lisätään taulukkoon luku 5

  console.log(t.length); // tulostuu 4

  t.forEach((value) => {
    console.log(value); // tulostuu 1, -1, 3, 5 omille riveilleen
  });

  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

export default Content;
