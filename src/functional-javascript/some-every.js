const employees = [
  {
    name: 'Isaac',
    salary: 1000000,
  },
  {
    name: 'Other',
    salary: 120000,
  },
];

const makesMoreThanOneMillion = (employee) => employee.salary > 1000000;

const result = employees.some(makesMoreThanOneMillion);

console.log('Does any one of the employees earn more than a million?', result);

const formValues = [
  'Isaac',
  'Babalola',
  'Jacob',
  '',
];

// we can use the double exclaimation mark to
// convert our strings to boolean
// this works because in javascript
// an empty string is a falsey value
const isNotEmpty = (string) => !!string;

const allFieldsFilled = formValues.every(isNotEmpty);

console.log('Are all the fields filled?', allFieldsFilled);
