import { renameFile } from './renameFile'

export function renameFiles(oldPaths, newPaths) {
    oldPaths.forEach((oldPath, index) => {
        if (newPaths[index] !== undefined) {
            renameFile(oldPath, newPaths[index])
        } else {
            throw new Error(
                `New file path is not defined for the file ${oldPath}`
            )
        }
    })
}
