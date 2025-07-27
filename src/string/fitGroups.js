export function fitGroups(array, groups) {
    return groups.map((group) => ({
        data: array.filter((string) => string.includes(group)),
        group,
    }))
}
