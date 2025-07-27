import { describe, it, expect } from '../../testingLibrary/testingLibrary.js'
import { sum } from '../../src/utils/sum.js'

export const sum_test = () => {
    describe('sum', () => {
        it('sum 1+2', () => {
            const result = sum(1, 2)

            const expected = 3

            expect(result).toBe(expected)
        })
    })
}
