import fs from 'fs'

const names = ["Kolya", "Ksusha", "Vasilisa", "Oleg"];
names.push("Galina","Sergei")
const table = names.map(
    (name) => `    <tr>
          <td>Name: </td>
          <td>${name}</td>
        </tr>`
  ).join("\n\t\t")

const template = `<!DOCTYPE html>
<html lang="ru">
  <head>
      <title>Lesson 1</title>
  </head>
  <body>
    sdfdsf sdfsd 23423 eede2222 4sdsdfd 77777 7777 88888 99999  0000
    <table border="3">
    ${table}
    </table>
  </body>
</html>
`;


const build = () => {
  fs.writeFileSync('index.html', template);
}

build()
