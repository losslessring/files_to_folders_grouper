import { describe, it, expect } from '../../../testingLibrary/testingLibrary.js'

import { getFileNames } from './../../../src/files/getFileNames'
import path from 'path'

export const getFileNames_test = () => {
    describe('get file names from the folder', () => {
        it('get file names from the folder 0', () => {
            const dirName =
                path.resolve() +
                '\\' +
                'tests\\files\\getFileNames\\testFolder0'

            const result = getFileNames(dirName)

            const expected = ['a.txt', 'b.txt', 'c.txt']

            expect(result).toBe(expected)
        })

        it('get file names from the folder 1', () => {
            const dirName =
                path.resolve() +
                '\\' +
                'tests\\files\\getFileNames\\testFolder1'

            const result = getFileNames(dirName)

            const expected = [
                'Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part1_Downloadly.ir.txt',
                'Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part2_Downloadly.ir.txt',
                'Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part3_Downloadly.ir.txt',
            ]

            expect(result).toBe(expected)
        })
    })
}
