export function extractSubstringByRegExp(string, regexp) {
    const match = string.match(regexp)
    if (match === null) {
        throw new Error(
            `Regular expression ${regexp} does not matched anything in the ${string}`
        )
    } else {
        return string.match(regexp)[0]
    }
}
