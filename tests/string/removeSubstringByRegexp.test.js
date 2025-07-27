import { describe, it, expect } from '../../testingLibrary/testingLibrary.js'
import { removeSubstringByRegexp } from './../../src/string/removeSubstringByRegexp'

export const removeSubstringByRegexp_test = () => {
    describe('remove substring by regular expression', () => {
        it('remove substring by regular expression 0', () => {
            const string =
                'Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part1_Downloadly.ir.rar'

            const result = removeSubstringByRegexp(
                string,
                /.part[0-9]_Downloadly.ir.rar/,
                ''
            )
            const expected =
                'Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6'

            expect(result).toBe(expected)
        })

        // it('remove substring by regular expression 1', () => {
        //     const string =
        //         'Udemy_Computational_Fluid_Dynamics_Fundamentals_Course_2_2023-4_Downloadly.ir.part1.rar'

        //     const firstStep = removeSubstringByRegexp(
        //         string,
        //         /Downloadly.ir/,
        //         ''
        //     )
        //     const result = removeSubstringByRegexp(firstStep, /part[0-9]/, '')

        //     const expected =
        //         'Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6'

        //     expect(result).toBe(expected)
        // })

        // it('remove substring by regular expression 2', () => {
        //     const string =
        //         'Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part1_Downloadly.ir.rar'

        //     const firstStep = removeSubstringByRegexp(
        //         string,
        //         /Downloadly.ir/,
        //         ''
        //     )
        //     const result = removeSubstringByRegexp(firstStep, /part1.rar/, '')

        //     const expected =
        //         'Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6'

        //     expect(result).toBe(expected)
        // })
    })
}
