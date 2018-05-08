'use strict';

function versionToInteger(major, minor, patch) {
  const x = Math.pow(2, major);
  const y = Math.pow(3, minor);
  const z = Math.pow(5, patch);

  return x * y * z;
}

function versionStringToInteger(version) {
  const [major, minor, patch] = version.split(`.`);

  return versionToInteger(major, minor, patch);
}

function getPrimeFactors(number) {
  const result = [];
  let num = number;
  let div = 2;

  while (num > 1) {
    if (num % div !== 0) {
      div += 1;
    } else {
      num /= div;
      result.push(div);
    }
  }

  return result;
}

function integerToVersionString(versionInteger) {
  let twos = 0;
  let threes = 0;
  let fives = 0;

  const factors = getPrimeFactors(versionInteger);
  factors.forEach((factor) => {
    if (factor === 2) {
      twos += 1;
    } else if (factor === 3) {
      threes += 1;
    } else if (factor === 5) {
      fives += 1;
    }
  });

  return `${twos}.${threes}.${fives}`;
}

module.exports = {
  versionToInteger,
  versionStringToInteger,
  integerToVersionString,
};

