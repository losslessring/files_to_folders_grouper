import { getFileNames } from './getFileNames'
import { removeSubstringByRegexp } from './../string/removeSubstringByRegexp'
import { extractUniq } from './../string/extractUniq'
import { fitGroups } from './../string/fitGroups'
import { makeDirs } from './makeDirs'
import { renameFiles } from './renameFiles'
import { makeDir } from './makeDir'
import { extractSubstringByRegExp } from './../string/extractSubstringByRegExp'

export function createDirsFromFileGroups(dirName, regexp, delimiter) {
    const fileNames = getFileNames(dirName)

    const cuttedFileNames = fileNames.map((fileName) =>
        // removeSubstringByRegexp(fileName, regexp, '')

        extractSubstringByRegExp(fileName, regexp)
    )

    const groups = extractUniq(cuttedFileNames)

    const filesInGroups = fitGroups(fileNames, groups)

    const pathsToFilesAndDirs = filesInGroups.map((filesGroups) => ({
        filesOldPaths: filesGroups.data.map(
            (fileName) => `${dirName}${delimiter}${fileName}`
        ),
        dirPath: `${dirName}${delimiter}${filesGroups.group}`,
        filesNewPaths: filesGroups.data.map(
            (fileName) =>
                `${dirName}${delimiter}${filesGroups.group}${delimiter}${fileName}`
        ),
    }))

    pathsToFilesAndDirs.forEach((paths) => {
        makeDir(paths.dirPath)

        renameFiles(paths.filesOldPaths, paths.filesNewPaths)
    })
}
