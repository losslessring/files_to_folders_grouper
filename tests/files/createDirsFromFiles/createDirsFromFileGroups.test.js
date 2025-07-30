import { describe, it, expect } from '../../../testingLibrary/testingLibrary.js'
import { createDirsFromFileGroups } from './../../../src/files/createDirsFromFileGroups'
import path from 'path'

export const createDirsFromFileGroups_test = () => {
    describe('create directories from file groups', () => {
        it('create directories from file groups', () => {
            const dirName =
                path.resolve() +
                '\\' +
                'tests\\files\\createDirsFromFiles\\testFolder0'
            const regexp = /.part[0-9]_Downloadly.ir.txt/
            const result = createDirsFromFileGroups(dirName, regexp)
            const expected = [
                'Udemy_Mastering_Jest_Testing_with_TypeScript_and_Node.js_2025-5',
                'Udemy_The_Complete_Quantum_Computing_Course_with_Python_2025_2025-3',
            ]
            expect(result).toBe(expected)
        })
    })
}
