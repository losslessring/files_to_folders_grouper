import { readdirSync } from 'fs'

export function getDirs(source) {
    return readdirSync(source, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name)
}
