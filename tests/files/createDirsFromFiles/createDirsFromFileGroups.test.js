import { describe, it, expect } from '../../../testingLibrary/testingLibrary.js'
import { createDirsFromFileGroups } from './../../../src/files/createDirsFromFileGroups'
import path from 'path'

export const createDirsFromFileGroups_test = () => {
    describe('create directories from file groups', () => {
        it('create directories from file groups', () => {
            // const dirName =
            //     path.resolve() +
            //     '\\' +
            //     'tests\\files\\createDirsFromFiles\\testFolder0'

            const dirName = `C:\\tutorials\\temp`
            const regexp = /(^.*?\d{4}-\d{1,})/
            const delimiter = '\\'
            const result = createDirsFromFileGroups(dirName, regexp, delimiter)

            // const expected = [
            //     {
            //         filesOldPaths: [
            //             'D:\\projects\\programming\\files_to_folders_grouper\\tests\\files\\createDirsFromFiles\\testFolder0\\Udemy_Mastering_Jest_Testing_with_TypeScript_and_Node.js_2025-5.part1_Downloadly.ir.txt',
            //             'D:\\projects\\programming\\files_to_folders_grouper\\tests\\files\\createDirsFromFiles\\testFolder0\\Udemy_Mastering_Jest_Testing_with_TypeScript_and_Node.js_2025-5.part2_Downloadly.ir.txt',
            //             'D:\\projects\\programming\\files_to_folders_grouper\\tests\\files\\createDirsFromFiles\\testFolder0\\Udemy_Mastering_Jest_Testing_with_TypeScript_and_Node.js_2025-5.part3_Downloadly.ir.txt',
            //             'D:\\projects\\programming\\files_to_folders_grouper\\tests\\files\\createDirsFromFiles\\testFolder0\\Udemy_Mastering_Jest_Testing_with_TypeScript_and_Node.js_2025-5.part4_Downloadly.ir.txt',
            //         ],
            //         dirPath:
            //             'D:\\projects\\programming\\files_to_folders_grouper\\tests\\files\\createDirsFromFiles\\testFolder0\\Udemy_Mastering_Jest_Testing_with_TypeScript_and_Node.js_2025-5',
            //         filesNewPaths: [
            //             'D:\\projects\\programming\\files_to_folders_grouper\\tests\\files\\createDirsFromFiles\\testFolder0\\Udemy_Mastering_Jest_Testing_with_TypeScript_and_Node.js_2025-5\\Udemy_Mastering_Jest_Testing_with_TypeScript_and_Node.js_2025-5.part1_Downloadly.ir.txt',
            //             'D:\\projects\\programming\\files_to_folders_grouper\\tests\\files\\createDirsFromFiles\\testFolder0\\Udemy_Mastering_Jest_Testing_with_TypeScript_and_Node.js_2025-5\\Udemy_Mastering_Jest_Testing_with_TypeScript_and_Node.js_2025-5.part2_Downloadly.ir.txt',
            //             'D:\\projects\\programming\\files_to_folders_grouper\\tests\\files\\createDirsFromFiles\\testFolder0\\Udemy_Mastering_Jest_Testing_with_TypeScript_and_Node.js_2025-5\\Udemy_Mastering_Jest_Testing_with_TypeScript_and_Node.js_2025-5.part3_Downloadly.ir.txt',
            //             'D:\\projects\\programming\\files_to_folders_grouper\\tests\\files\\createDirsFromFiles\\testFolder0\\Udemy_Mastering_Jest_Testing_with_TypeScript_and_Node.js_2025-5\\Udemy_Mastering_Jest_Testing_with_TypeScript_and_Node.js_2025-5.part4_Downloadly.ir.txt',
            //         ],
            //     },
            //     {
            //         filesOldPaths: [
            //             'D:\\projects\\programming\\files_to_folders_grouper\\tests\\files\\createDirsFromFiles\\testFolder0\\Udemy_The_Complete_Quantum_Computing_Course_with_Python_2025_2025-3.part1_Downloadly.ir.txt',
            //             'D:\\projects\\programming\\files_to_folders_grouper\\tests\\files\\createDirsFromFiles\\testFolder0\\Udemy_The_Complete_Quantum_Computing_Course_with_Python_2025_2025-3.part2_Downloadly.ir.txt',
            //             'D:\\projects\\programming\\files_to_folders_grouper\\tests\\files\\createDirsFromFiles\\testFolder0\\Udemy_The_Complete_Quantum_Computing_Course_with_Python_2025_2025-3.part3_Downloadly.ir.txt',
            //         ],
            //         dirPath:
            //             'D:\\projects\\programming\\files_to_folders_grouper\\tests\\files\\createDirsFromFiles\\testFolder0\\Udemy_The_Complete_Quantum_Computing_Course_with_Python_2025_2025-3',
            //         filesNewPaths: [
            //             'D:\\projects\\programming\\files_to_folders_grouper\\tests\\files\\createDirsFromFiles\\testFolder0\\Udemy_The_Complete_Quantum_Computing_Course_with_Python_2025_2025-3\\Udemy_The_Complete_Quantum_Computing_Course_with_Python_2025_2025-3.part1_Downloadly.ir.txt',
            //             'D:\\projects\\programming\\files_to_folders_grouper\\tests\\files\\createDirsFromFiles\\testFolder0\\Udemy_The_Complete_Quantum_Computing_Course_with_Python_2025_2025-3\\Udemy_The_Complete_Quantum_Computing_Course_with_Python_2025_2025-3.part2_Downloadly.ir.txt',
            //             'D:\\projects\\programming\\files_to_folders_grouper\\tests\\files\\createDirsFromFiles\\testFolder0\\Udemy_The_Complete_Quantum_Computing_Course_with_Python_2025_2025-3\\Udemy_The_Complete_Quantum_Computing_Course_with_Python_2025_2025-3.part3_Downloadly.ir.txt',
            //         ],
            //     },
            // ]

            const expected = undefined

            expect(result).toBe(expected)
        })
    })
}
