import { extractSubstringByRegExp } from './extractSubstringByRegExp'
import { extractUniq } from './extractUniq'

export function createGroups(array, regexp) {
    const cutted = array.map((string) =>
        extractSubstringByRegExp(string, regexp)
    )
    return extractUniq(cutted)
}
