/**
 * Shuffles array in place.
 * @returns {Array} The shuffled array.
 * @example [1, 2, 3].shuffle() // [2, 3, 1]
 */
export default function <T>(this: T[]): T[]
{
    return this.sort(() => 0.5 - Math.random());
}