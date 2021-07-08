const fs = require("fs");

fs.writeFileSync("notes.txt", "Neetu");

fs.appendFileSync("notes.txt", "\nAshish");
