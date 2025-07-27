import fs from 'fs'

export function makeDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
    }
}
