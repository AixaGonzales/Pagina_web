const form = document.querySelector('form');
const nameInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#gmail');
const messageInput = document.querySelector('#mensaje');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
    alert('Please fill in all fields');
  } else {
    console.log('Form submitted successfully!');
  }
});