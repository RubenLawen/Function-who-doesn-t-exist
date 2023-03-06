/**
 * Counts the number of times each letter appears in a string
 * @example string.betterLetterCount("hello") // {h: 1, e: 1, l: 2, o: 1}
 * @example string.betterLetterCount("racecar") // {r: 2, a: 2, c: 2, e: 1}
 * @returns {object}
 */
export default function (this: string): { [key: string]: number }
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
    return obj;
}