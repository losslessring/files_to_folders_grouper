import fs from 'fs'

export function renameFile(oldPath, newPath) {
    fs.renameSync(oldPath, newPath)
}
