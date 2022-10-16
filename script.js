'use strict';

function plusMinus(arr) {
  // Write your code here
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      zero++;
    }
  }
  positiveRatio = positive / arr.length;
  negativeRatio = negative / arr.length;
  zeroRatio = zero / arr.length;
  console.log(positiveRatio.toFixed(6));
  console.log(negativeRatio.toFixed(6));
  console.log(zeroRatio.toFixed(6));
  // return [positiveRatio, negativeRatio, zeroRatio];
}

// plusMinus(arrayFadi);

/*
let fadiarray = [1, 5, 7];
function miniMaxSum(arr) {
  // Write your code here
  let smallest = Math.min(...arr);
  let biggest = Math.max(...arr);
  let smallSum = arr.reduce((partialSum, a) => partialSum + a, 0) - biggest;
  let bigSum = arr.reduce((partialSum, a) => partialSum + a, 0) - smallest;
  console.log(smallest, biggest);
  console.log(smallSum, bigSum);
  // for (let i = 0; i < arr.length - 1; i++) {
  //   if (arr[i] <= arr[i + 1]) {
  //     smallest = i;
  //     biggest = i + 1;
  //   } else {
  //     smallest = i + 1;
  //     biggest = i;
  //   }
  // }

  // biggest = arr.splice(biggest, 1);
  // console.log(biggest);
  // console.log(arr.reduce((partialSum, a) => partialSum + a, 0));

  // arr.push(biggest);
  // console.log(arr);

  // smallest = arr.splice(smallest, 1);
  // console.log(smallest);
  // console.log(arr.reduce((partialSum, a) => partialSum + a, 0));

  // let bigarr = arr.splice(smallest, 1);
  // console.log(biggest, smallest, smallarr, bigarr);
  // smallSum = smallarr.reduce((partialSum, a) => partialSum + a, 0);
  // bigSum = bigarr.reduce((partialSum, a) => partialSum + a, 0);

  // console.log(smallSum, bigSum);
}

miniMaxSum(fadiarray);
*/

// TIME CONVERSION function
/*
let f = '12:05:45AM';

function timeConversion(s) {
  if (s[8] === 'A' || s[8] === 'a') {
    s = s.split('');
    s.pop();
    s.pop();
    if (s[0] === '1' && s[1] === '2') {
      s[0] = (0).toString();
      s[1] = (0).toString();
      s = s.join('');
      return console.log(s);
    } else {
      s = s.join('');
      return console.log(s);
    }
    // let hour = parseInt(s[1]);
    // let newHour = hour;
  } else if (s[0] === '1' && s[1] === '2' && s[8] === 'P') {
    s = s.split('');
    s.pop();
    s.pop();
    s = s.join('');
    return console.log(s);
  } else {
    s = s.split('');
    s[0] = (parseInt(s[0]) + 1).toString();
    s[1] = (parseInt(s[1]) + 2).toString();
    s.pop();
    s.pop();

    s = s.join('');
    return console.log(s);
  }
}
timeConversion(f);

function timeConversion2(s) {
  let AMPM = s.slice(-2);
  let timeArr = s.slice(0, -2).split(':');

  if (AMPM === 'AM' && timeArr[0] === '12') {
    // catching edge-case of 12AM
    timeArr[0] = '00';
  } else if (AMPM === 'PM') {
    // everything with PM can just be mod'd and added with 12 - the max will be 23
    timeArr[0] = (timeArr[0] % 12) + 12;
  }

  return timeArr.join(':');
}
console.log(timeConversion2(f));
*/

//SPARSE ARRAYS
/*
const s = ['ab', 'a', 'b', 'ab']; //i
const q = ['a', 'b', 'g', 'ab']; //e

function matchingStrings(strings, queries) {
  // Write your code here
  let result = [];
  let n = 0;
  for (let e = 0; e < queries.length; e++) {
    for (let i = 0; i < strings.length; i++) {
      if (queries[e] === strings[i]) {
        n++;
      }
    }
    result.push(n);
    n = 0;
  }
  return result;
}

console.log(matchingStrings(s, q));
*/

// Lonely Integer
/*
const b = [1, 2, 3, 4, 3, 2, 1];
// const test1 = b.some(character => {
//   console.log(character);
//   return b[2] === 3;
// });
// console.log(test1);

function lonelyinteger(a) {
  // Write your code here
  // for (let i = 0; i < a.length; i++) {
  //   const checkOddNumber = a.map(character => {
  //     return character === a[i];
  //   });
  //   if (checkOddNumber === true) {
  //     console.log(a[i]);
  //   }
  // }
  const count = a.map(l => a.filter(item => item === l).length);
  console.log(count);
  const index = count.findIndex(x => x === 1);
  return a[index];
}
console.log(lonelyinteger(b));

const arr = [1, 2, 3, 2, -2, -5];

const withdrawals = arr.filter(x => x < 2);
console.log(withdrawals);

const mapp = arr.map(item => item - 2);
console.log(mapp);
*/

// Flipping bits
/*
function flippingBits(n) {
  // Write your code here
  return ~n >>> 0;
}
console.log(flippingBits(80));
*/

// Diagonal Difference
/*
function diagonalDifference(arr) {
  // Write your code here
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][i] - arr[i][arr.length - 1 - i];
  }
  return Math.abs(sum);
}
console.log(diagonalDifference([1, 10, 5][(2, 0, 2)]));
*/

// PANGRAMS
/*
const a = 'hello worldqwertyuioplaskdjfhgmznxbcvz';
console.log(a.length);
console.log(a[0]);

function pangrams(s) {
  // Write your code here
  let arr = {};
  let charSum = 0;

  for (let i = 0; i < s.length; i++) {
    let charCode = s[i].toUpperCase().charCodeAt(0);
    console.log(charCode);
    if (charCode === 32) {
      continue;
    }
    if (!arr[charCode]) {
      arr[charCode] = 1;
      charSum++;
    }
    if (charSum === 26) {
      return 'pangrams';
    }
  }
  return 'not pangrams';
}

console.log(pangrams(a));

// const ha = 'ab cd';
// console.log(Object.keys(ha));
// console.log(ha[2].charCodeAt(0));

// let mp = {};
// mp[10] = 5;
// console.log(mp);
*/
/*
const A = ['a', 'g', 'b'];
const AA = A.sort((a, b) => a - b);
console.log(AA);
for (let i in A) {
  console.log(i);
}
for (let i of A) {
  console.log(i);
}
const B = [1, 2, 5];
const k = 5;
function twoArrays(k, A, B) {
  let inverseA = A.sort((a, b) => a - b);
  let inverseB = B.sort((a, b) => b - a);
  console.log(inverseA, inverseB);
  for (let i in inverseA) {
    if (inverseA[i] + inverseB[i] < k) {
      return 'NO';
    }
  }
  return 'YES';
}
console.log(twoArrays(k, A, B));
*/

// Subarray Division 1
/*
const s = [9, 2, 6, 5];
const d = 11;
const m = 2;

function birthday(s, d, m) {
  // Write your code here
  let sumOfWays = 0;
  let arrOfm = [];
  for (let i = 0; i < s.length; i++) {
    arrOfm = s.slice(i, i + m);
    // console.log(arrOfm);
    let x = arrOfm.reduce((a, b) => a + b);
    console.log(x);
    if (arrOfm.reduce((a, b) => a + b) === d) {
      sumOfWays++;
      // console.log(sumOfWays);
    }
  }
  return sumOfWays;
}
console.log(birthday(s, d, m));
*/
/*
const trial = 'CDM';
const romanToInt = function (s) {
  s = s.split('');
  let total = 0;
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] < obj[s[i + 1]]) {
      total += obj[s[i + 1]] - obj[s[i]];
      i++;
    } else {
      total += obj[s[i]];
      // console.log(total);
    }
  }
  // console.log(total);
  return total;
};

romanToInt(trial);
*/

// const twoSum = function (nums, target) {
//   let f;
//   nums.forEach((item, index) => {
//     if (item + nums[index + 1] === target) {
//       f = [index, index + 1];
//     }
//   });
//   return f;
// };
// console.log(twoSum([2, 8, 6], 10));

/*
const twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const check = target - nums[i];
    // console.log(check in nums);
    // console.log(map);
    if (check in map) {
      return [map[check], i];
    }
    map[nums[i]] = i;
  }
  // return map[]
};

// const map1 = {};
// map1[4] = 9;
// map1['sk'] = 'p';
// console.log(map1);

const array1 = [3, 5, 6, 7];
console.log(twoSum(array1, 9));
*/
// const a = [2, 4, 3];
// const b = [5, 6, 4];
/*
const addTwoNumbers = function (l1, l2) {
  let c = [0];

  for (let i = 0; i < l1.length; i++) {
    if (l1[i] + l2[i] < 10) {
      c[i] += l1[i] + l2[i];
      c[i + 1] = 0;
    } else {
      c[i] += l1[i] + l2[i] - 10;
      c[i + 1] = 1;
    }
  }
  if (c[c.length - 1] === 0) {
    c.pop();
  }
  // c.forEach(function (a) {
  //   if (isNaN(a)) {
  //     a = 80;
  //   }
  for (let i = 0; i < c.length; i++) {
    isNaN(c[i]) ? (c[i] = 0) : c[i];
    // !c[i] ? (c[i] = 0) : c[i];
  }
  return c;
};

console.log(addTwoNumbers(a, b));
*/
/*
const addTwoNumbers = function (l1, l2) {
  const arr1 = parseInt(l1.reverse().join(''));
  const arr2 = parseInt(l2.reverse().join(''));
  // console.log(arr1, arr2);
  const result = arr1 + arr2;
  // console.log(result);
  const result1 = Array.from(String(result), Number);
  return result1.reverse();
};
console.log(addTwoNumbers(a, b));
*/
/*
const lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  if (s === ' ') {
    maxLength = 1;
    if (s === '') {
      maxLength = 0;
    }
  }
  for (let i = 0; i < s.length; i++) {
    // let a = s[i];
    for (let j = i + 1; j < s.length; j++) {
      // let b = s[j];
      if (s[i] === s[j]) {
        maxLength = Math.max(maxLength, j - i);
        console.log(maxLength, j - i);
        // console.log(maxLength);
        break;
        // console.log(newString);
      } else {
        maxLength = Math.max(maxLength, j - i + 1);
      }
    }
  }
  return maxLength;
};
// console.log(lengthOfLongestSubstring(s));

const s = 'abcbbb';

const function1 = function (s) {
  var k = 0;
  var maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = k; j < i; j++) {
      if (s[i] === s[j]) {
        k = j + 1;
        console.log(k);
        break;
      }
    }
    if (i - k + 1 > maxLength) {
      maxLength = i - k + 1;
      console.log(maxLength);
    }
  }
  return maxLength;
};
// console.log(function1(s));

var findMedianSortedArrays = function (nums1, nums2) {
  let median;
  const arr = nums1.concat(nums2);
  arr.sort((a, b) => a - b);
  console.log(arr);
  if (arr.length % 2 === 1) {
    median = arr[Math.floor(arr.length / 2)];
    console.log(median);
  } else {
    median = (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
  }
  return median;
};
console.log(findMedianSortedArrays([3], [-2, -1]));

*/
/*
const convert = function (s, numRows) {
  let arr = new Array(numRows).fill('');
  let j = 0;
  let direction = 1;
  if (s.length <= numRows || numRows < 2) return s;

  for (let i = 0; i < s.length; i++) {
    if (j == numRows - 1) direction = -1;
    if (j == 0) direction = 1;
    arr[j] += s[i];
    j += direction;
  }
  return arr.join('');
  /*
  //   let f = 0;
  let convertedWord = s[0];
  // let k = n;
  for (let k = n; k > 0; k--) {
    if (k === 1) {
      convertedWord += s[n - 1];
    }
    let factor = 2 * k - 2;
    for (let i = factor; i < s.length; i += factor) {
      convertedWord += s[i];
    }
  }
  return convertedWord;
  */
/*
  if (s.length <= numRows || numRows < 2) {
    return s;
  }
  let arr = new Array(numRows).fill('');
  let j = 0;
  let direction = 1;
  for (let i = 0; i < s.length; i++) {
    if (j == numRows - 1) {
      direction = -1;
    }
    if (j == 0) {
      direction = 1;
    }
    arr[j] += s[i];
    j += direction;
  }
  return arr.join('');
  
};
console.log(convert('hellorifts', 15));
*/
/*
var reverse = function (x) {
  // let z = 589;
  // console.log(z);
  // if (x >= Math.pow(-2, 31) && x <= Math.pow(2, 31) - 1) {
  for (let i; x % 10 === 0; x /= 10);
  let z = x.toString();
  let arr = new Array(z.length).fill('');
  for (let i = 0; i < z.length; i++) {
    arr[i] = z[i];
  }
  const arrReversed = arr.reverse();
  if (arrReversed[arrReversed.length - 1] === '-') {
    arrReversed.pop();
    arrReversed.unshift('-');
  }
  let result = parseInt(arrReversed.join(''));
  if (Math.abs(result) > 2147483648) {
    return 0;
  }
  return result;
};
console.log(reverse(2 ** 10));
console.log(2 ** 31);

console.log(reverse(58));
*/
/*
var myAtoi = function (s) {
  let arr = s.split('');
  // console.log(arr);
  // let arrNew = new Array(arr.length)
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (arr[i] === '-' || arr[i] === '+') {
      continue;
    }
    if (!parseInt(arr[i]) / 2) {
      arr.splice(i, 1);
      i--;
    }
  }
  if (arr[arr.length - 1] === '-') {
    arr.pop();
    arr.unshift('-');
  }
  let resultInt = parseInt(arr.join(''));
  if (resultInt > 2147483647) {
    resultInt = 2147483647;
  }
  if (resultInt < -2147483648) {
    resultInt = -2147483648;
  }
  return resultInt;
  console.log(arr);
  // if ('-' in arr) {
  //   arrNew[0] = '-';
  // }
  // console.log(arr);
};

console.log(myAtoi('words and 987'));
*/
/*
var myAtoi = function (s) {
  let v = !parseInt(s) ? 0 : parseInt(s);
  if (v < 0) return Math.max(v, -2147483648);
  if (v >= 0) return Math.min(v, 2147483647);
};

console.log(myAtoi('08400sda'));
*/
/*
var isPalindrome = function (x) {
  const arr = x.toString().split('');
  let arrReversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    arrReversed.push(arr[i]);
  }
  console.log(arr, arrReversed);
  return arr.join('') == arrReversed.join('') ? true : false;
};

console.log(isPalindrome(789));
*/
/*
var isMatch = function (s, p) {
  let newString = [];
  let arrP = p.split('');
  let arrS = s.split('');

  for (let i = 0; i < arrP.length; i++) {
    if (arrP[i] === '*') {
      if (arrS.includes(arrP[i - 1], i - 1) || arrP.includes('.', i - 1)) {
        newString[i] = arrP.replce(arrP[i - 1], arrS[i - 1]);
        // console.log(newString);
        if (newString[i] === '.') {
          newString[i] = arrS[i];
        }
      } else {
        arrP.splice(i - 1, 1);
        arrP.splice(i - 1, 1);
        i = i - 2;
        // console.log(arrP);
      }
    } else if (arrP[i] === '.') {
      newString[i] = arrS[i];
    } else if (i < arrS.length) {
      newString[i] = arrP[i];
      // console.log(newString);
    }
  }
  const arrSstring = arrS.join('');
  const newStringstring = newString.join('');
  console.log(arrSstring, newStringstring);
  if (arrSstring === newStringstring) {
    return true;
  } else {
    return false;
  }
};
console.log(isMatch('ab', '.*c'));
*/
/*
function fizzBuzz(n) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

// function main() {
// const n = parseInt(readLine().trim(), 10);

//   fizzBuzz(n);
// }

fizzBuzz(5);
*/

// BOB ANDY Game:

const bobAndyGame = function (arr) {
  let player = 'BOB';
  getPlayer();

  function getPlayer() {
    const indexOfMaxValue = arr.reduce(
      (iMax, x, i, arr) => (x > arr[iMax] ? i : iMax),
      0
    );
    arr = arr.slice(0, indexOfMaxValue);
    // console.log(arr);
    if (arr.length === 0) {
      //   console.log(player);
      return player;
    } else {
      player === 'BOB' ? (player = 'ANDY') : (player = 'BOB');
      //  and repeat function
      getPlayer();
    }
  }

  return getPlayer();
  //   console.log(arr);
  //   console.log(indexOfMaxValue);
};
console.log(bobAndyGame([5]));

// const arraytest = [5];
// console.log(arraytest.length === 0);

console.log('hello fadi0 asd lasdk'.replaceAll(' ', '-'));

// console.log(bobAndyGame.name);

// document.body.addEventListener('click', function () {
//   console.log('clicked 👌');
// });

function superReducedString(s) {
  // Write your code here
  let ss = s.trim();
  let newStringArray = ss.split('');
  //   console.log(newStringArray);
  let i = 0;
  function checkFirst2Characters(str) {
    if (str[i] === str[i + 1] && i < str.length) {
      str.splice(i, 2);
      //   str.shift();
      //   console.log(str, i, str.length);

      checkFirst2Characters(str);
    } else if (i < str.length) {
      i++;
      //   console.log(i);
      checkFirst2Characters(str);
    }
  }
  checkFirst2Characters(newStringArray);
  i = 0;
  checkFirst2Characters(newStringArray);
  i = 0;
  checkFirst2Characters(newStringArray);
  i = 0;
  checkFirst2Characters(newStringArray);
  i = 0;
  checkFirst2Characters(newStringArray);
  i = 0;
  checkFirst2Characters(newStringArray);
  i = 0;
  checkFirst2Characters(newStringArray);

  if (newStringArray.length === 0) {
    return 'Empty String';
  } else return newStringArray.join('');
}

console.log(superReducedString('assv'));

console.log('-----------------');

function camelcase(s) {
  // Write your code here
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      result++;
    }
  }
  return result + 1;
}

// console.log(/[a-z]/.test('esD'));

function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong
  password = password.trim().split(' ').join('');
  n = password.length;
  console.log(password, n);
  const specialCharachter = /[!@#$%^&*()\-+]/;
  const upperCase = /[A-Z]/;
  const lowerCase = /[a-z]/;
  const numbers = /[0-9]/;

  let count = 0;
  let remainingCharachters = 6 - n;
  specialCharachter.test(password) ? '' : count++;
  console.log(count);
  upperCase.test(password) ? '' : count++;
  console.log(count);
  lowerCase.test(password) ? '' : count++;
  console.log(count);
  numbers.test(password) ? '' : count++;
  console.log(count);

  return Math.max(count, remainingCharachters);
}
// }

// console.log(minimumNumber(4, 'AUzs-nV'));

// console.log(/[!@#$%^&*()+-]/.test('-'));
// console.log(Math.abs(-231));

function alternate(s) {
  // Write your code here
  let arr5 = [];
  const arrOriginal = s.split('');
  // console.log(arrOriginal);
  const arrSet = [...new Set(arrOriginal)];
  let maxLength = 0;
  for (let i = 0; i < arrSet.length - 1; i++) {
    let pass = false;
    let first = arrSet[i];
    for (let x = i + 1; x < arrSet.length; x++) {
      let pass = false;
      let second = arrSet[x];
      arr5 = arrOriginal.filter(e => e === first || e === second);
      // console.log(i, arrSet, first, second, arr5);

      for (let j = 0; j < arr5.length - 1; j++) {
        if (arr5[j] === arr5[j + 1]) {
          // console.log(`no at j=${j} found!!!!`);
          pass = true;
          break;
        }
      }
      if (pass === false) {
        maxLength = Math.max(maxLength, arr5.length);
        // console.log(`max length = ${maxLength}`);
      }
    }
    // console.log(arr5);
  }
  return maxLength;
}
console.log(alternate('beabeefeab'));

// console.log('**********************');
// let arr4 = ['o', 'k', 'p', 'k'];
// const index = arr4.indexOf('k');
// console.log(index);
// const arr5 = arr4.filter(e => e === 'k' || e === 'p');
// console.log(arr5);

function caesarCipher(s, k) {
  // Write your code here
  if (k > 26) {
    k = k % 26;
    console.log(k);
  }
  let lettresArray = [...s];
  let newLetter;
  console.log(lettresArray);
  let newArray = [];
  for (let letter of lettresArray) {
    // if (!/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/.test(letter)) {
    if (/[a-z]/.test(letter) || /[A-Z]/.test(letter)) {
      let newCode = letter.charCodeAt(0) + k;
      if (newCode > 90 && /[A-Z]/.test(letter)) newCode = 64 + (newCode - 90);
      else if (newCode > 122 && /[a-z]/.test(letter))
        newCode = 96 + (newCode - 122);

      newLetter = String.fromCharCode(newCode);
      newArray.push(newLetter);
    } else newArray.push(letter);
  }
  return newArray.join('');
}

console.log(caesarCipher('Zello-woRld', 1));

console.log('a'.charCodeAt(0) + 1);
console.log(String.fromCharCode(98));

console.log('z'.charCodeAt(0));

//n number if sticks
//b number of chosen boxes
// k number of storeboxes

/*
function bonetrousle(n, k, b) {
  // Write your code here

  n = BigInt(n);
  let storeBoxes = [];
  for (let i = 1; i <= k; i++) {
    storeBoxes.push(i);
  }

  console.log(storeBoxes);
  let [...resultArr] = new Array(b);
  console.log(resultArr);
  for (let index = 0n; index < b; index++) {
    let base = index + 1n;
    console.log(`base : ${base}`);
  }
}

bonetrousle(15, 10, 3);
*/

function marsExploration(s) {
  // Creating the counter which will count the wrong charachters
  let count = 0;

  // Creating a loop index to ittirate each letter's index in our string
  for (let index in s) {
    //  if the letter of index 1 (or its corresponding index when adding 3, means when index is 1,4,7,10 ... ) is not "O", then increase the count by 1, otherwise nothing happens
    (index === 1 || index % 3 === 1) && s[index] !== 'O' ? count++ : '';

    // Same previous concept to check "S"
    (index === 0 || index === 2 || index % 3 === 0 || index % 3 === 2) &&
    s[index] !== 'S'
      ? count++
      : '';
  }
  return count;
}

marsExploration('SOSSOSSTSSOR');

console.log('----------------------------------------------');
/*
function hackerrankInString(s) {
  // Write your code here
  let count = 0;
  let hackerrank = 'hackerrank';

  for (let hackerLetter of hackerrank) {
    for (let i in s) {
      if (s[i] === hackerLetter) {
        // console.log(`${i} in string: ${s}`);
        count++;
        let removedItem = s.slice(0, parseInt(i) + 1);
        // console.log(parseInt(i) + 1, removedItem);
        s = s.replace(removedItem, '');
        // console.log(hackerLetter, i, removedItem);
        // console.log(s);
        // console.log(
        //   `------ ${hackerLetter} found count now is ${count} and string became ${s} ---------`
        // );
        break;
      }
    }
  }

  // console.log(count);
  return count >= 10 ? 'YES' : 'NO';
}

console.log(hackerrankInString('hackerrank'));
*/

/*
function pangrams(s) {
  // Write your code here
  let sArrSet = new Set(s.toUpperCase().split(' ').join('').split(''));
  console.log(sArrSet.size);
  return sArrSet.size === 26? 'pangram' : 'not pangram';
}

console.log(pangrams('kjasd'));
*/

function weightedUniformStrings(s, queries) {
  // Write your code here
  let weigthsArray = [];
  let count = 1;
  let queriesArray = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[i - 1]) {
      weigthsArray.push(s[i].charCodeAt(0) - 96);
      count = 1;
    } else {
      count++;
      weigthsArray.push((s[i].charCodeAt(0) - 96) * count);
    }
  }

  for (let item of queries) {
    weigthsArray.includes(item)
      ? queriesArray.push('Yes')
      : queriesArray.push('No');
  }

  return queriesArray;
}
weightedUniformStrings('abbccc', [2, 15, 3, 30, 4]);

// const BigNumber = require('bignumber.js');

function separateNumbers(s) {
  // Write your code here

  for (let i = 1; i <= s.length / 2; i++) {
    const n = s.substring(0, i);
    // console.log(n);
    let test = n;
    let a = BigInt(n);
    while (test.length <= s.length) {
      test += `${++a}`;
      // n = s.substring(0, i + 1);
      if (test != s.substring(0, test.length)) {
        break;
      }
      if (test == s) {
        console.log(`YES ${n}`);
        return;
      }
    }
  }
  console.log(`NO`);
}

// separateNumbers('12');

// const num = '12';
// console.log(num.substring(0, 1));

function funnyString(s) {
  // Write your code here
  const sArr = s.toLowerCase().split('');
  const sReversed = s.toLowerCase().split('').reverse();
  let sDiff = [];

  let sReveredDiff = [];

  for (let i = 0; i < s.length - 1; i++) {
    sDiff.push(Math.abs(sArr[i + 1].charCodeAt(0) - sArr[i].charCodeAt(0)));
    sReveredDiff.push(
      Math.abs(sReversed[i + 1].charCodeAt(0) - sReversed[i].charCodeAt(0))
    );
  }
  // console.log(sDiff.join(''), sReveredDiff.join(''));
  return sDiff.join('') === sReveredDiff.join('') ? 'Funny' : 'Not Funny';
}

console.log(funnyString('abcd'));

// console.log('s'.charCodeAt(0));

function gemstones(arr) {
  // Write your code here
  // let arrSet = new Set();
  let arrUnique = [];
  let count = 0;
  // let check = true;

  for (let rock of arr) {
    let rockLettersArr = rock.split('');
    let arrLettersSet = new Set(rockLettersArr);
    arrUnique.push(Array.from(arrLettersSet).join(''));
  }
  // console.log(arrUnique);

  for (let i = 0; i < arrUnique[0].length; i++) {
    let check = true;
    for (let j = 1; j < arrUnique.length; j++) {
      if (!arrUnique[j].includes(arrUnique[0][i])) {
        check = false;
        break;
      }
    }
    if (check === false) {
      continue;
    }
    count++;
    // console.log(count, arrUnique[0][i]);
  }
  return count;
}

gemstones(['abcdz', 'wbrabz', 'kagbz', 'abz']);

console.log('asd'.includes('s'));

function alternatingCharacters(s) {
  // Write your code here
  let count = 0;
  for (let i = 1; i < s.length; i++) {
    s[i] === s[i - 1] ? count++ : '';
  }
  return count;
}

console.log(alternatingCharacters('AABAABBC'));

let ss = 'asd5d';
let arrr = ss.split('');
console.log(/[1-9]/g.test('8'));

function decryptPassword(s) {
  // Write your code here
  s = s.split('');
  let finalArr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toLowerCase() && s[i + 1] === s[i + 1].toUpperCase()) {
      finalArr.push(s[i + 1]);
      finalArr.push(s[i]);
      i = i + 1;
    } else if (/[1-9]/g.test(s[i])) {
      finalArr.push('0');
      finalArr.unshift(s[i]);
    } else {
      finalArr.push(s[i]);
    }
  }
  let finalResult = finalArr.join('');
  return finalResult;
}

console.log(decryptPassword('aB5dfsdaB'));

// return (
//   parseInt(l1.join(''), 10) +
//   parseInt(l2.join(''), 10).toString().split('').reverse()
// );

let greet = greeting => name => console.log(`${greeting} ${name}`);

greet('hello')('Fadi');

document.querySelector('.buy').addEventListener('click', function () {
  console.log('hi clicked');
});

const addTax = (rate, value) => value + rate * value;

console.log(addTax(0.3, 10));

const addTax30 = value => addTax(0.3, value);

// const addTax30 = function (value) {
//   return addTax(0.3, value);
// };
console.log(addTax30(10));

const addTax2 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addTex402 = addTax2(0.4);
console.log(addTex402(100));

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n ${this.options.join('\n')} \n Write option number`
      )
    );
    answer < this.answers.length &&
      typeof answer === 'number' &&
      this.answers[answer]++;
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    } else if (type === 'array') {
      console.log(this.answers);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [0, 5, 8] }, 'string');

document
  .querySelector('.displayResults')
  .addEventListener('click', poll.displayResults.bind(poll, 'array'));

// poll.registerNewAnswer();

/*
document.querySelector('.poll').addEventListener('click', function () {
  const answer = prompt(`What is your favourite programming language?
  0: JavaScript
  1: Python
  2: Rust
  3: C++
  (Write option number)`);
  console.log(answer);
  ++poll.answers[answer];
  // console.log(poll);
});

document
  .querySelector('.displayResults')
  .addEventListener('click', function () {
    console.log(poll.answers);
  });
*/

function minimumBribes(q) {
  // Write your code here
  // console.log(q)
  let count = 0;
  let check;
  for (let i = 0; i < q.length; i++) {
    if (q[i] === i + 1 || check === i + 1) {
      continue;
    } else if (q[i] > i + 1) {
      if (q[i] - i - 1 > 2) {
        return 'Too chaotic';
      } else {
        count += q[i] - i - 1;
        check = i + 1;
      }
    }
  }
  return count;
}

console.log(minimumBribes([2, 5, 1, 3, 4]));

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

console.log('------------------------------------------');

function sockMerchant(n, ar) {
  // Write your code here
  let sum = 0;

  for (let i = 0; i < ar.length; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      if (ar[i] === ar[j]) {
        ar.splice(j, 1);
        ar.splice(i, 1);
        i = 0;
        sum++;
        break;
      }
    }
  }
  return sum;
}
console.log(sockMerchant(1, [10, 20, 20, 10, 10, 30, 50, 10, 20]));

let arr4 = [5, 1, 3, 6, 5];
arr4.splice(0, 1);
arr4.splice(1, 1);
console.log(arr4);

let arrfor = [2, -5, 3, -8, 0, 9];

// arrfor.forEach(function (element, index, array) {
//   element < 0
//     ? console.log(`position ${index + 1} is negative`)
//     : console.log(`position ${index + 1} is positive`);
//   console.log(element);
// });

console.log('------------------------------------------');

function sockMerchant1(n, ar) {
  let sum = 0;
  const map = new Map();

  ar.forEach(element => {
    map.set(element, map.get(element) + 1 || 1);
  });
  console.log(map);

  map.forEach((value, key) => {
    sum += Math.floor(value / 2);
  });
  return sum;
}
sockMerchant1(1, [10, 20, 20, 10, 10, 30, 50, 10, 20]);

let map = new Map();
map.set('jo');
map.set('jo', map.get('jo') + 1 || 1);
console.log(map.get('jo'));
console.log(Math.floor(5.5));

function findDigits(n) {
  // Write your code here
  let sum = 0;
  let narr = n.toString().split('');
  narr.forEach(digit => {
    let x = n % parseInt(digit);
    x === 0 || NaN ? sum++ : '';
  });
  return sum;
}

findDigits(1560);
// console.log((156)[0]);

function extraLongFactorials(n) {
  // Write your code here
  n = BigInt(n);
  console.log(n);
  let factorial = 1n;
  for (let i = 0n; i < n; i++) {
    factorial *= n - i;
  }
  console.log(factorial.toString());
}

extraLongFactorials(30);

function appendAndDelete(s, t, k) {
  // Write your code here
  let result;
  if ((k = 0)) {
    if ((s = k)) {
      return 'yes';
    } else {
      return 'no';
    }
  }
}
// appendAndDelete(s, t, k);

function compareTriplets(a, b) {
  // Write your code here
  let aa = 0;
  let bb = 0;

  for (let i = 0; i < a.length; i++) {
    a[i] > b[i] ? aa++ : '';
    a[i] < b[i] ? bb++ : '';
  }
  return [aa, bb];
}

console.log(compareTriplets([1, 4, 3], [56, 4, 56]));

function diagonalDifference(arr) {
  // Write your code here
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][i] - arr[i][arr.length - 1 - i];
  }
  console.log(Math.abs(sum));
}

diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]);

function plusMinus(arr) {
  // Write your code here
  const arrplus = arr.filter(a => a > 0).length / arr.length;
  const arrminus = arr.filter(a => a < 0).length / arr.length;
  const arrzero = arr.filter(a => a === 0).length / arr.length;

  console.log(arrplus);
  console.log(arrminus);
  console.log(arrzero);
}

plusMinus([2, 2, 0, -5, -6]);

console.log(2 * 'sdaf'.padStart(10));

function birthdayCakeCandles(candles) {
  // Write your code here
  return candles
    .sort((a, b) => b - a)
    .filter(
      (a, i, arr) => a === arr[0]
      // console.log(a === arr[0]);
    ).length;
}

console.log('--------------------');
function gradingStudents(grades) {
  // Write your code here
  let result = [];
  grades.forEach(grade => {
    // Math.ceil(grade/5) *5
    let rounded = Math.ceil(grade / 5) * 5;
    if (rounded < 40 || rounded - grade > 2) {
      result.push(grade);
    } else {
      result.push(rounded);
    }
  });
  return result;
}

gradingStudents([38, 78, 77]);

function pageCount(n, p) {
  // Write your code here
  let front, back;
  front = Math.floor(p / 2);
  back = n % 2 === 0 ? Math.ceil((n - p) / 2) : Math.floor((n - p) / 2);
  return front < back ? front : back;
}

console.log(pageCount(6, 3));

var runningSum = function (nums) {
  let acc = 0;
  let res = [];
  for (const i of nums) {
    // console.log(i);
    acc += i;
    res.push(acc);
  }
  return res;
};

runningSum([1, 1, 1, 1, 1, 1, 1]);

var findLeastNumOfUniqueInts = function (arr, k) {
  // Setting up a map to store NUMBERS as keys and REPETITIONS as values.
  let map = new Map();

  for (const item of arr) {
    if (map.get(item)) {
      let acc = map.get(item);
      acc++;
      map.set(item, acc);
    } else {
      map.set(item, 1);
    }
  }

  // Converting the map to a matrix (array of arrays)
  let arr1 = [...map.entries()];

  // Shifting the values of the array so that [0] become the repetition and [1] become the number
  // arr1.forEach(element => {
  //   let mo = element[0];
  //   element[0] = element[1];
  //   element[1] = mo;
  // });

  // Sorting the array [1] from the least repeatable to the most one
  let sortedArr = arr1.sort((a, b) => a[1] - b[1]);

  // Going threw the sorted array and decreasing the repetition(index 0) by the k value
  for (let i = 0; i < sortedArr.length; i++) {
    if (k === 0) {
      break;
    }
    while (sortedArr[i][1] > 0) {
      sortedArr[i][1]--;
      k--;
      if (k === 0) {
        break;
      }
    }
  }
  // Counting the values that has a repetition more than Zero
  // let count = 0;
  // for (let i = 0; i < sortedArr.length; i++) {
  //   if (sortedArr[i][1] > 0) {
  //     count++;
  //   }
  // }
  // return count;
  return sortedArr.filter(item => item[1] > 0).length;
};

console.log(findLeastNumOfUniqueInts([4, 3, 1, 1, 4, 3, 3, 2], 3));

console.log('---------------');

var minDays = function (bloomDay, m, k) {
  let matrix = [];
  let arrMax = [];
  let leastBloomDay = 0;
  // Check if number of flowers is more than the number of days (array length)
  if (m * k > bloomDay.length) {
    return -1;
  }

  // while (bloomDay.length > k && m > 0) {
  // creatingBouquets();
  // }
  function creatingBouquets() {
    // going threw the array and extracting "the biggest number" every k number
    for (let i = 0; i <= bloomDay.length - k; i++) {
      // for (let j = i; j < Math.min(k + i, bloomDay.length); j++) {
      //   maxOfEachSmallArray = Math.max(maxOfEachSmallArray, bloomDay[j]);
      // }
      // arrOfDays.push(maxOfEachSmallArray);
      let testArr = bloomDay.slice(i, k + i);
      // console.log(testArr);
      matrix.push(testArr);
      arrMax.push(Math.max(...testArr));
    }
    // console.log(matrix);
    // console.log(arrMax);
    let indexOfMin = arrMax.indexOf(Math.min(...arrMax));
    // leastBloomDay.push(Math.max(...matrix[indexOfMin]));
    leastBloomDay = Math.max(leastBloomDay, Math.max(...matrix[indexOfMin]));
    bloomDay.splice(indexOfMin, k);
    m--;
    matrix = [];

    // console.log(
    //   `bloomDay: ${bloomDay}, leastBloomDay: ${leastBloomDay},arrMax:${arrMax}, m: ${m}`
    // );
    arrMax = [];

    while (m > 0) {
      creatingBouquets();
    }
    // creating condition to end the recursion, if the bloomDay.length is empty then don't recurse
  }
  // console.log(arrOfDays);
  // finding "the minimum" of maximums

  // getting the index of the minimum and extract the first array (of k numbers) from the original array
  // return arrOfDays.sort()[m];
  // return Math.max(...leastBloomDay);
  creatingBouquets();

  return leastBloomDay;
};

console.log(minDays([10, 1, 15, 13, 2], 2, 2));
console.log(minDays([7, 7, 7, 7, 12, 7, 7], 2, 3));

const rotate = function (matrix) {
  let newM = [];
  let i = matrix.length - 1;
  let j = 0;
  while (j <= matrix.length - 1) {
    let arr = [];
    while (i >= 0) {
      arr.push(matrix[i][j]);
      i--;
    }
    newM.push(arr);
    i = matrix.length - 1;
    j++;
  }
  matrix = newM;
  return matrix;
};

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

const disRes = document.querySelector('.displayResults');
disRes.addEventListener('click', function () {
  console.log('HIIIII');
});

// setInterval(function () {
//   disRes.click();
// }, 1000);

// document.querySelector('applicationForm:managedForm:proceed');
// setInterval(function () {
//   document.querySelector('ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only button arrow-right ui-state-hover').click();
// }, 4000);

// setInterval(function () {
//   document.querySelector('.ui-button').click();
// }, 4000);

console.log('-------------');
var getFolderNames = function (names) {
  let map = new Map();
  let finalArr = [];
  for (let name1 of names) {
    let name = name1.split('(');
    // console.log(name[0]);
    // console.log(map.get(name[0]) + 1);

    if (finalArr.find(element => element == name1)) {
      if (map.get(name[0])) {
        map.set(name[0], map.get(name[0]) + 1);
        finalArr.push(`${name[0]}(${map.get(name[0]) - 1})`);
      } else {
        map.set(name[0], 1);
        finalArr.push(...name);
      }
    } else {
      finalArr.push(name1);
    }
  }
  console.log(map);
  return finalArr;
};

console.log(getFolderNames(['gta', 'gta(1)', 'gta', 'avalon']));
console.log(getFolderNames(['pes', 'fifa', 'gta', 'pes(2019)']));

let arr1234 = [2, 34, 5];
console.log(arr1234.find(element => element == 1));
