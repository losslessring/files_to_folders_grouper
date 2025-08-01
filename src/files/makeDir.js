import fs from 'fs'

export function makeDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
    } else {
        // throw new Error(`Directory already exists for the given path ${dir}`)
    }
}
