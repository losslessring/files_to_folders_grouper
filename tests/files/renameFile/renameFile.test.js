import { describe, it, expect } from '../../../testingLibrary/testingLibrary.js'

import path from 'path'

import { renameFile } from './../../../src/files/renameFile'
import { getFileNames } from './../../../src/files/getFileNames'

export const renameFile_test = () => {
    describe('rename file', () => {
        // it('rename file', () => {
        //     const oldPath =
        //         path.resolve() +
        //         '\\' +
        //         'tests\\files\\renameFile\\testFolder0\\a.txt'
        //     const newPath =
        //         path.resolve() +
        //         '\\' +
        //         'tests\\files\\renameFile\\testFolder0\\innerFolder\\a.txt'
        //     renameFile(oldPath, newPath)
        //     const directoryWithMovedFile =
        //         path.resolve() +
        //         '\\' +
        //         'tests\\files\\renameFile\\testFolder0\\innerFolder\\'
        //     const result = getFileNames(directoryWithMovedFile)
        //     const expected = ['a.txt']
        //     expect(result).toBe(expected)
        // })
    })
}
