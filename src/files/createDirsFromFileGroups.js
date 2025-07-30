import { getFileNames } from './getFileNames'
import { removeSubstringByRegexp } from './../string/removeSubstringByRegexp'
import { extractUniq } from './../string/extractUniq'

export function createDirsFromFileGroups(dirName, regexp) {
    const fileNames = getFileNames(dirName)

    const cuttedFileNames = fileNames.map((fileName) =>
        removeSubstringByRegexp(fileName, regexp, '')
    )
    return extractUniq(cuttedFileNames)
}
