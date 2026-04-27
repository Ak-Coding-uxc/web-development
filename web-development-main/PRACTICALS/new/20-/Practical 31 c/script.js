const form  = document.getElementById('myForm');
const name  = document.getElementById('name');
const phone = document.getElementById('phone');
const error = document.getElementById('error');

form.addEventListener('submit', function (event) {
  let messages = [];
if (name.value.trim() === '') {
    messages.push('Please enter your name.');
  }
  const phonePattern = /^\d{10}$/;  
  if (!phonePattern.test(phone.value.trim())) {
    messages.push('Please enter a valid 10‑digit phone number.');
  }
if (messages.length > 0) {
    event.preventDefault();          // stop submit [web:75][web:85]
    error.textContent = messages.join(' ');
  } else {
    error.textContent = '';
    alert('Form submitted successfully!');
  }
});
