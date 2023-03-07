/**
 * Returns the multiplication table of a number
 * @param limit The limit of the table
 * @returns {number[]}
 * @example new Number(5).multiplicationTable(5) // [ 5, 10, 15, 20, 25 ]
 * @example new Number(5).multiplicationTable() // [ 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 ]
 */
export default function (this: number, limit: number = 10): number[]
{
    let table: number[] = []
    for (let i = 1; i <= limit; i++)
        table.push(i * this);
    return table;
}