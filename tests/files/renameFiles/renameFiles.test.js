import { describe, it, expect } from '../../../testingLibrary/testingLibrary.js'

import path from 'path'

import { renameFiles } from './../../../src/files/renameFiles'
import { getFileNames } from './../../../src/files/getFileNames'

export const renameFiles_test = () => {
    describe('rename files', () => {
        // it('rename files', () => {
        //     const folderPath =
        //         path.resolve() + '\\' + 'tests\\files\\renameFiles\\testFolder0'
        //     const oldPaths = [
        //         folderPath + '\\a.txt',
        //         folderPath + '\\b.txt',
        //         folderPath + '\\c.txt',
        //     ]
        //     const newPaths = [
        //         folderPath + '\\innerFolder\\a.txt',
        //         folderPath + '\\innerFolder\\b.txt',
        //         folderPath + '\\innerFolder\\c.txt',
        //     ]
        //     renameFiles(oldPaths, newPaths)
        //     const directoryWithMovedFile =
        //         path.resolve() +
        //         '\\' +
        //         'tests\\files\\renameFiles\\testFolder0\\innerFolder\\'
        //     const result = getFileNames(directoryWithMovedFile)
        //     const expected = ['a.txt', 'b.txt', 'c.txt']
        //     expect(result).toBe(expected)
        // })
        // it('throws error on renaming file to undefined folder in rename files', () => {
        //     const folderPath =
        //         path.resolve() + '\\' + 'tests\\files\\renameFiles\\testFolder0'
        //     const oldPaths = [
        //         folderPath + '\\a.txt',
        //         folderPath + '\\b.txt',
        //         folderPath + '\\c.txt',
        //     ]
        //     const newPaths = [
        //         folderPath + '\\innerFolder\\a.txt',
        //         folderPath + '\\innerFolder\\b.txt',
        //     ]
        //     renameFiles(oldPaths, newPaths)
        //     const directoryWithMovedFile =
        //         path.resolve() +
        //         '\\' +
        //         'tests\\files\\renameFiles\\testFolder0\\innerFolder\\'
        //     const result = getFileNames(directoryWithMovedFile)
        //     const expected = ['a.txt', 'b.txt']
        //     expect(result).toBe(expected)
        // })
    })
}
