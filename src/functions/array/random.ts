/**
 * Returns a random element from an array
 * @returns {T} The random element
 * @example [1, 2, 3].random() // 2
 */
export default function <T>(this: T[]): T
{
    return this[Math.floor(Math.random() * this.length)];
}