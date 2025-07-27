import { describe, it, expect } from '../../testingLibrary/testingLibrary.js'
import { extractUniq } from './../../src/string/extractUniq'

export const extractUniq_test = () => {
    describe('extract unique values from array', () => {
        it('extract unique values from array', () => {
            const strings = ['a', 'b', 'c', 'a', 'a', 'b']

            const result = extractUniq(strings)
            const expected = ['a', 'b', 'c']
            expect(result).toBe(expected)
        })
    })
}
