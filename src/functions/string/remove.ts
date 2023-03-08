/**
 * Removes all occurences of a substring from a string.
 * @param {string} exp The substring to remove.
 * @returns {string} The string without the substring.
 * @example "Hello World".remove("l") // "Heo Word"
 */
export default function (this: string, exp: string): string
{
    return this.replace(new RegExp(exp, "g"), "");
}