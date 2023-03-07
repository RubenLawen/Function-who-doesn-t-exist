import isPalin from './functions/string/isPalin';
import letterCount from './functions/string/letterCount';
import betterLetterCount from './functions/string/betterLetterCount';
import multiplicationTable from './functions/number/multiplicationTable';
import middle from './functions/array/middle';

String.prototype.isPalin = isPalin;
String.prototype.letterCount = letterCount;
String.prototype.betterLetterCount = betterLetterCount;
Number.prototype.multiplicationTable = multiplicationTable;
Array.prototype.middle = middle;