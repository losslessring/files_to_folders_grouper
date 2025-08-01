import fs from 'fs'

export function getFileNames(dirName) {
    return fs
        .readdirSync(dirName, { withFileTypes: true })
        .filter((item) => !item.isDirectory())
        .map((item) => item.name)
}
