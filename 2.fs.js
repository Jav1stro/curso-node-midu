const fsSync = require("node:fs");
// fs con promesas
const fs = require("node:fs/promises");

// Ejemplo asyncrono con promesas
// fs.readFile("./archivo.txt", "utf-8").then((text) =>
//   console.log("Async", text)
// );

console.log("--------");

// Ejemplo sincro
// const text = fsSync.readFileSync("./archivo.txt", "utf-8");
// console.log("sync", text);

// Sincrono con callback
// fsSync.readFile("./archivo2.txt", "utf-8", (error, text) => {
//   console.log("sync2", text);
// });

// Ahora con async y await, necesito declarar una función IIFE (que se invoca inmediatamente)

(async () => {
  const text1 = await fs.readFile("./archivo.txt", "utf-8");
  console.log("Texto1", text1);

  const text2 = await fs.readFile("./archivo2.txt", "utf-8");
  console.log("Texto2", text2);
})();
