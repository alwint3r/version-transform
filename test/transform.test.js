const transform = require(`..`);

test(`encode version to integer correclty`, () => {
  expect(transform.versionStringToInteger(`0.0.0`)).toEqual(1);
  expect(transform.versionStringToInteger(`0.0.1`)).toEqual(5);
  expect(transform.versionStringToInteger(`0.1.0`)).toEqual(3);
  expect(transform.versionStringToInteger(`1.0.0`)).toEqual(2);
  expect(transform.versionStringToInteger(`1.0.1`)).toEqual(10);
  expect(transform.versionStringToInteger(`1.1.0`)).toEqual(6);
  expect(transform.versionStringToInteger(`0.1.1`)).toEqual(15);
  expect(transform.versionStringToInteger(`1.1.1`)).toEqual(30);
});

test(`encode version (tuple) to integer correctly`, () => {
  expect(transform.versionToInteger(0, 0, 0)).toEqual(1);
  expect(transform.versionToInteger(0, 0, 1)).toEqual(5);
  expect(transform.versionToInteger(0, 1, 0)).toEqual(3);
  expect(transform.versionToInteger(1, 0, 0)).toEqual(2);
  expect(transform.versionToInteger(1, 0, 1)).toEqual(10);
  expect(transform.versionToInteger(1, 1, 0)).toEqual(6);
  expect(transform.versionToInteger(0, 1, 1)).toEqual(15);
  expect(transform.versionToInteger(1, 1, 1)).toEqual(30);
});

test(`decode integer to version string correctly`, () => {
  expect(transform.integerToVersionString(1)).toEqual(`0.0.0`);
  expect(transform.integerToVersionString(2)).toEqual(`1.0.0`);
  expect(transform.integerToVersionString(3)).toEqual(`0.1.0`);
  expect(transform.integerToVersionString(5)).toEqual(`0.0.1`);
  expect(transform.integerToVersionString(6)).toEqual(`1.1.0`);
  expect(transform.integerToVersionString(10)).toEqual(`1.0.1`);
  expect(transform.integerToVersionString(15)).toEqual(`0.1.1`);
  expect(transform.integerToVersionString(30)).toEqual(`1.1.1`);
});


