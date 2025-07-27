import fs from 'fs'

export function getFileNames(dirName) {
    return fs.readdirSync(dirName)
}
