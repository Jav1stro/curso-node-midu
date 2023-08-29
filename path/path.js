const path = require("node:path");

// barra separadora de carpetas según sistema operativo
console.log(path.sep);

// unir rutas con path join
const filePath = path.join("content", "subfolder", "test.txt");
console.log("path.join", filePath);

// nombre del fichero de una ruta
const base = path.basename("../archivo2.txt", ".txt"); // el segundo param le quita esa parte
console.log("Nombre del fichero:", base);


// extensión
const extension = path.extname('image.jpg')
console.log('extension de image.jpg:',extension)