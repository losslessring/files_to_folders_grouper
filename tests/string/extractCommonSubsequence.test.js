import { describe, it, expect } from '../../testingLibrary/testingLibrary.js'
import { extractCommonSubsequence } from './../../src/string/extractCommonSubsequence'

export const extractCommonSubsequence_test = () => {
    describe('extract common subsequence', () => {
        it('extract common subsequence', () => {
            const strings = [
                'Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part1_Downloadly.ir.rar',
                'Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part2_Downloadly.ir.rar',
                'Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part3_Downloadly.ir.rar',
                'Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part4_Downloadly.ir.rar',
            ]

            const result = extractCommonSubsequence(strings)
            const expected =
                'Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part'
            expect(result).toBe(expected)
        })
    })
}
