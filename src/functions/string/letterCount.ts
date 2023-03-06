/**
 * Counts the number of unique letters in a string
 * @returns {number}
 * @example string.letterCount("hello") // 4
 * @example string.letterCount("racecar") // 4
 */
export default function (this: string): number
{
    let arr = this.split("");
    let obj = {};
    for (let i = 0; i < arr.length; i++)
    {
        if (obj[arr[i]])
            obj[arr[i]]++;
        else
            obj[arr[i]] = 1;
    }
    return Object.keys(obj).length;
}