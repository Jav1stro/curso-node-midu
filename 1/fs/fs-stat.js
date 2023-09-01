const fs = require("node:fs");

const stats = fs.statSync("./archivo.txt");

console.group();
console.log("Es un fichero?", stats.isFile());
console.log("Es un directorio?", stats.isDirectory());
console.log("Tamaño en bytes", stats.size);
console.groupEnd();
