/**
 * Checks if a string is a palindrome
 * @returns {boolean}
 * @example string.isPalin("racecar") // true
 * @example string.isPalin("hello") // false
 */
export default function isPalin(this: string): boolean
{
    return (this.slice(0, this.length / 2) == this.slice(this.length % 2 ? this.length / 2 + 1 : this.length / 2, this.length).split("").reverse().join(""))
}