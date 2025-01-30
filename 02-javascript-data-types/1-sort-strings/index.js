/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    let newArr = arr.slice();
    newArr.sort((a,b) => a.localeCompare(b, ["ru-RU","en-US"], { caseFirst: "upper" }));
    if (param != "asc") {
        newArr.reverse()
    }
    return newArr
}