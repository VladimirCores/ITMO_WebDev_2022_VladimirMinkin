const domInputFirstName = document.getElementById('inputFirstName');
const domInputLastName = document.getElementById('inputLastName');
const domFullNameContainer = document.getElementById('fullNameContainer');

domInputFirstName.addEventListener('keyup', onHandleInputs);
domInputLastName.addEventListener('keyup', onHandleInputs);

const inputs = [domInputFirstName, domInputLastName];

function onHandleInputs() {
  // const fistName = domInputFirstName.value;
  // const lastName = domInputLastName.value;
  // console.log('> onHandleInputs:', { fistName, lastName });
  // domFullNameContainer.innerText = fistName + ' ' + lastName;
  domFullNameContainer.innerText = joinListItemsContainsValue(inputs, ' ');
}

function joinListItemsContainsValue(list, delimiter) {
  return list
    .filter(({ value }) => !!value)
    .map(({ value }) => value)
    .join(delimiter);
}
