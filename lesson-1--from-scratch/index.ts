import fs from "fs";

// const humans = ["Kolya", "Ksusha", "Vasilisa", "Oleg"];
type Human = {
  name: String;
  age: number;
  gender: "Man" | "Women";
};
let humans: Human[] = [{ name: "Vasya", age: 23, gender: "Women" }];
humans.push(
  { name: "Galina", age: 22, gender: "Women" },
  { name: "Sergei", age: 20, gender: "Man" },
  { name: "Andrei", age: 55, gender: "Man" },
  { name: "Dmitrii", age: 35, gender: "Man" },
  { name: "Kristina", age: 15, gender: "Women" }
);

// function compare(a:Human, b:Human) {
//   if (a.age < b.age) {
//     return -1;
//   }
//   if (a.age > b.age) {
//     return 1;
//   }
//   // a должно быть равным b
//   return 0;
// }
// humans.sort(compare);
 
var slice = [...humans];
slice = slice.slice();

// const filtered = humans.filter((n) => {
//   return n.age > 20 && n.age < 35;
// });

let count = 0;

const nameRenderer = (human: Human) => {
  count++;

  return `    <tr>
    <td>${count}</td>
    <td>${human.name}</td>
    <td>${human.age}</td>
    <td>${human.gender}</td>
  </tr>`;
};

const rows = slice.map(nameRenderer).join("\n\t\t");

const template = `<!DOCTYPE html>
<html lang="ru">
  <head>
      <title>Lesson 1</title>
  </head>
  <body>
    sdfdsf s4444 dfdfgfdgdf sd 23423 eede2222 4sdsdfd 77777 7777 88888 99999  0000
    <table border="3">
    <tr>
          <th> № </th>
          <th>Имя</th>
          <th>Возраст</th>
          <th>пол</th>
        </tr>
    ${rows}
    </table>
  </body>
</html>
`;

const build = () => {
  fs.writeFileSync("index.html", template);
};

build();
