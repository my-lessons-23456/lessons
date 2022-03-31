import fs from "fs";

// const names = ["Kolya", "Ksusha", "Vasilisa", "Oleg"];
type Human = {
  name: String;
  age: number;
  gender: "Man" | "Women";
};
const names: Human[] = [{ name: "Vasya", age: 23, gender: "Women" }];
names.push(
  { name: "Galina", age: 22, gender: "Women" },
  { name: "Sergei", age: 20, gender: "Man" }
);
function compare(a:Human, b:Human) {
  if (a.age > b.age) {
    return -1;
  }
  if (a.age < b.age) {
    return 1;
  }
  // a должно быть равным b
  return 0;
}
names.sort(compare);

let count = 0;

const nameRenderer = (human: Human) => {
  count++;

  return `    <tr>
    <td>${count}</td>
    <td>${human.name}</td>
    <td>${human.age}</td>
    <td>${human.gender}</td>
  </tr>`;
}

const rows = names
  .map(nameRenderer)
  .join("\n\t\t");

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
