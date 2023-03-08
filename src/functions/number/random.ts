/**
 * Returns a random number between min (inclusive) and max (exclusive)
 * @param min The minimum number
 * @param max The maximum number
 * @returns {number}
 * @example Number.random(1, 10) // 5
 */
export default function (min: number = 1, max: number = 2147483647): number
{
    return Math.random() * (max - min) + min;
}