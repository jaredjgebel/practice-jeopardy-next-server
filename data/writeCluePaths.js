const fs = require("fs");

fs.readFile("./clues.json", "utf-8", (err, data) => {
  if (err) throw err;

  const clues = JSON.parse(data);

  const ids = clues.map((clue) => clue.id);

  fs.writeFile("./clueIds.json", JSON.stringify(ids), (err) => {
    if (err) throw err;
    console.log("File data saved.");
  });
});
