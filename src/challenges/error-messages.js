const FIRST_NAME_CHAR_VALIDATE = 2;
const LAST_NAME_CHAR_VALIDATE = 2;
const POSTCODE_CHAR_LIMIT = 6;
const COUNTY_LIMIT = 2;

const currentInputValues = {
  firstName: 'Isaac', // Must be at least 2 characters
  lastName: '', // Must be at least 2 characters
  postCode: '123456', // Must be exactly 6 characters
  county: '', // Must be exactly 2 characters
};

const moreThanCheck = (key, input, value) => (input.length < value ? `${key} must be at least ${value} charaters` : '');
const exactCheck = (key, input, value) => (input.length !== value ? `${key} must be exactly ${value} charaters` : '');

const atleast = (key, value) => (input) => moreThanCheck(key, input, value);
const exactly = (key, value) => (input) => exactCheck(key, input, value);

const inputCriteria = {
  firstName: [atleast('First Name', FIRST_NAME_CHAR_VALIDATE)],
  lastName: [atleast('Last Name', LAST_NAME_CHAR_VALIDATE)],
  postCode: [exactly('Postcode', POSTCODE_CHAR_LIMIT)],
  county: [exactly('County', COUNTY_LIMIT)],
};

const getErrorMessages = (inputs, criteria) => Object.keys(inputs).map((key) => {
  const validate = criteria[key][0];
  return validate(inputs[key]);
}).filter((errorMessage) => errorMessage);

console.log(getErrorMessages(currentInputValues, inputCriteria));

/*
    Expected Output: [
        'First name must be at least 2 characters',
        'Last name must be at least 2 characters',
        'Postcode must be exactly 5 characters',
        'County must be exactly 2 characters'
    ]
*/
