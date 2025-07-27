import { describe, it, expect } from '../../testingLibrary/testingLibrary.js'
import { extractSubstringByRegExp } from './../../src/string/extractSubstringByRegExp'

export const extractSubstringByRegExp_test = () => {
    describe('extract substring by regular expression', () => {
        it('extract substring by regular expression', () => {
            const string =
                'Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part1_Downloadly.ir.rar'

            const result = extractSubstringByRegExp(string, /^[^.]+/)
            const expected =
                'Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6'

            expect(result).toBe(expected)
        })

        it('extract substring by regular expression', () => {
            const string =
                'Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part1_Downloadly.ir.rar'

            const result = extractSubstringByRegExp(string, /(^.*?\d{4}-\d{1})/)
            const expected =
                'Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6'

            expect(result).toBe(expected)
        })
    })
}
