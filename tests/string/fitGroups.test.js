import { describe, it, expect } from '../../testingLibrary/testingLibrary.js'
import { fitGroups } from './../../src/string/fitGroups'

export const fitGroups_test = () => {
    describe('fit groups', () => {
        it('fit groups', () => {
            const strings = [
                'Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part1_Downloadly.ir.rar',
                'Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part2_Downloadly.ir.rar',
                'Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part3_Downloadly.ir.rar',
                'Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part4_Downloadly.ir.rar',
                'Udemy_Computational_Fluid_Dynamics_Fundamentals_Course_2_2023-4_Downloadly.ir.part1.rar',
                'Udemy_Computational_Fluid_Dynamics_Fundamentals_Course_2_2023-4_Downloadly.ir.part2.rar',
                'Udemy_Computational_Fluid_Dynamics_Fundamentals_Course_2_2023-4_Downloadly.ir.part3.rar',
                'Udemy_N8N_Automation_Course_from_Zero_to_Expert_2025-12.part1_Downloadly.ir.rar',
                'Udemy_N8N_Automation_Course_from_Zero_to_Expert_2025-12.part2_Downloadly.ir.rar',
                'Udemy_N8N_Automation_Course_from_Zero_to_Expert_2025-12.part3_Downloadly.ir.rar',
                'Udemy_N8N_Automation_Course_from_Zero_to_Expert_2025-12.part4_Downloadly.ir.rar',
            ]

            const groups = [
                'Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6',
                'Udemy_Computational_Fluid_Dynamics_Fundamentals_Course_2_2023-4',
                'Udemy_N8N_Automation_Course_from_Zero_to_Expert_2025-12',
            ]

            const result = fitGroups(strings, groups)
            const expected = [
                {
                    data: [
                        'Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part1_Downloadly.ir.rar',
                        'Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part2_Downloadly.ir.rar',
                        'Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part3_Downloadly.ir.rar',
                        'Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6.part4_Downloadly.ir.rar',
                    ],
                    group: 'Udemy_From_Concept_to_Cloud_Mastering_Full-Stack_Web_Development_2023-6',
                },
                {
                    data: [
                        'Udemy_Computational_Fluid_Dynamics_Fundamentals_Course_2_2023-4_Downloadly.ir.part1.rar',
                        'Udemy_Computational_Fluid_Dynamics_Fundamentals_Course_2_2023-4_Downloadly.ir.part2.rar',
                        'Udemy_Computational_Fluid_Dynamics_Fundamentals_Course_2_2023-4_Downloadly.ir.part3.rar',
                    ],
                    group: 'Udemy_Computational_Fluid_Dynamics_Fundamentals_Course_2_2023-4',
                },
                {
                    data: [
                        'Udemy_N8N_Automation_Course_from_Zero_to_Expert_2025-12.part1_Downloadly.ir.rar',
                        'Udemy_N8N_Automation_Course_from_Zero_to_Expert_2025-12.part2_Downloadly.ir.rar',
                        'Udemy_N8N_Automation_Course_from_Zero_to_Expert_2025-12.part3_Downloadly.ir.rar',
                        'Udemy_N8N_Automation_Course_from_Zero_to_Expert_2025-12.part4_Downloadly.ir.rar',
                    ],
                    group: 'Udemy_N8N_Automation_Course_from_Zero_to_Expert_2025-12',
                },
            ]
            expect(result).toBe(expected)
        })
    })
}
