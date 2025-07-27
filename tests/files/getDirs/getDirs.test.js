import { describe, it, expect } from '../../../testingLibrary/testingLibrary.js'

import path from 'path'
import { getDirs } from './../../../src/files/getDirs'

export const getDirs_test = () => {
    describe('get directory names from the folder', () => {
        it('get directory names from the folder 0', () => {
            const dirName =
                path.resolve() + '\\' + 'tests\\files\\getDirs\\testFolder0'

            const result = getDirs(dirName)

            const expected = ['testDir0', 'testDir1']

            expect(result).toBe(expected)
        })
    })
}
