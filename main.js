const domInputFirstName = document.getElementById('inputFirstName');
const domInputLastName = document.getElementById('inputLastName');
const domFullNameContainer = document.getElementById('fullNameContainer');

domInputFirstName.addEventListener('keyup', onHandleInputs);
domInputLastName.addEventListener('keyup', onHandleInputs);

function onHandleInputs() {
  const fistName = domInputFirstName.value;
  const lastName = domInputLastName.value;
  console.log('> onHandleInputs:', { fistName, lastName });
  domFullNameContainer.innerText = fistName + ' ' + lastName;
}
