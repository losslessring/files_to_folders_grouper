import { describe, it, expect } from '../../../testingLibrary/testingLibrary.js'

import { getFileNames } from './../../../src/files/getFileNames'
import path from 'path'

export const getFileNames_test = () => {
    describe('get file names from the folder', () => {
        it('get file names from the folder', () => {
            const dirName =
                path.resolve() + '\\' + 'tests\\files\\getFileNames\\testFolder'

            const result = getFileNames(dirName)

            const expected = ['a.txt', 'b.txt', 'c.txt']

            expect(result).toBe(expected)
        })
    })
}
