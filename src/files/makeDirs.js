import { makeDir } from './makeDir'

export function makeDirs(dirNames) {
    dirNames.forEach((dirName) => {
        makeDir(dirName)
    })
}
