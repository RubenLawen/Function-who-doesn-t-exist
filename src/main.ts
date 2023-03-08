import isPalin from './functions/string/isPalin';
import letterCount from './functions/string/letterCount';
import betterLetterCount from './functions/string/betterLetterCount';
import remove from './functions/string/remove';

import multiplicationTable from './functions/number/multiplicationTable';
import random from './functions/number/random';

import middle from './functions/array/middle';
import shuffle from './functions/array/shuffle';
import randomItem from './functions/array/random';

String.prototype.isPalin = isPalin;
String.prototype.letterCount = letterCount;
String.prototype.betterLetterCount = betterLetterCount;
String.prototype.remove = remove;

Number.prototype.multiplicationTable = multiplicationTable;
Number.prototype.random = random;

Array.prototype.middle = middle;
Array.prototype.shuffle = shuffle;
Array.prototype.random = randomItem;