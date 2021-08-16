/* eslint-disable prefer-rest-params */
function showValuesOld() {
  Array.from(arguments).forEach((value) => {
    console.log(value);
  });
}

function showValuesNew(...values) {
  values.forEach((arg) => {
    console.log(arg);
  });
}

showValuesOld(1, 2, 3, 'Hi...');
showValuesNew(1, 2, 3, 'Hi...');
