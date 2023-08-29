const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

const folder = process.argv[2] ?? '.'

// crea un ls como el de la terminal
const ls = async (folder) => {
  let files
  try {
    files = await fs.readdir(folder)
    console.log(pc.green('Directorio correcto!'))
  } catch {
    console.error(pc.red(`No se pudo leer el directorio ${folder}`))
    process.exit(1)
  }

  const filesPromises = files.map(async (file) => {
    const filePath = path.join(folder, file)
    let stats
    try {
      stats = await fs.stat(filePath)
    } catch {
      console.error(`No se pudo leer el archivo ${folder}`)
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f'
    const fileSize = stats.size
    const fileModified = stats.mtime.toLocaleString()

    return `FileType: ${pc.yellow(fileType.padStart(20))},File: ${pc.yellow(
      file.padStart(20)
    )}, FileSize: ${pc.yellow(
      fileSize.toString().padStart(20)
    )},Modified: ${pc.yellow(fileModified.padStart(20))}`
  })

  const filesInfo = await Promise.all(filesPromises)

  filesInfo.forEach((fileInfo) => console.log(pc.blue(fileInfo)))
}

//   si en la terminal escribo otra palabra, va a tomarla como la folder. node ls/ls-advanced.js ./process
ls(folder)
