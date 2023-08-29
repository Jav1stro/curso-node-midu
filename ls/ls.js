const fs = require("node:fs");
const path = require("node:path");

const { promisify } = require("node:util");
const readFilePromise = promisify(fs.readFile);

// crea un ls como el de la terminal
fs.readdir("./", (err, files) => {
  if (err) {
    console.error("Error al leer el directorio:", err);
    return;
  }

  console.group();
  files.forEach((file) => {
    const base = path.basename(file);
    readFilePromise(file, "utf-8", (error, text) => {
      text == undefined
        ? console.log(`----file ${base} can't be read`)
        : console.log(`----file ${base}`, text);
    });
  });
  console.groupEnd();
});

// saber si existe file
// const stats = fs.statSync("./archivo.txt");
// const file = path.basename("./archivo.txt", ".txt");
// console.log(`---stat de ${file}`, stats);
fs.stat("./archivo2.txt", (err, file) => {
  console.log("Para saber si existe un file, si da error no existe:");
  err ? console.error('NO EXISTE',err) : console.log('existe!',file);
});
