export function extractCommonSubsequence(array) {
    {
        let sortedArray = array.sort()
        let first = sortedArray[0]
        let last = sortedArray.pop()
        let length = first.length
        let index = 0

        while (index < length && first[index] === last[index]) {
            index++
        }
        return first.substring(0, index)
    }
}
