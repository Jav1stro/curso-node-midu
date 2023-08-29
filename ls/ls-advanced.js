const fs = require("node:fs/promises");
const path = require("node:path");

const folder = process.argv[2] ?? ".";

// crea un ls como el de la terminal
async function ls(folder) {
  let files;
  try {
    files = await fs.readdir(folder);
  } catch {
    console.error(`No se pudo leer el archivo ${folder}`);
    process.exit(1);
  }

  const filesPromises = files.map(async (file) => {
    const filePath = path.join(folder, file);
    let stats;
    try {
      stats = await fs.stat(filePath);
    } catch {
      console.error(`No se pudo leer el archivo ${folder}`);
      process.exit(1);
    }

    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? "d" : "f";
    const fileSize = stats.size;
    const fileModified = stats.mtime.toLocaleString();

    return `FileType: ${fileType.padStart(30)},File: ${file.padStart(
      30
    )}, FileSize: ${fileSize
      .toString()
      .padStart(30)},Modified: ${fileModified.padStart(30)}`;
  });

  const filesInfo = await Promise.all(filesPromises);

  filesInfo.forEach((fileInfo) => console.log(fileInfo));
}

//   si en la terminal escribo otra palabra, va a tomarla como la folder. node ls/ls-advanced.js ./process
ls(folder);
