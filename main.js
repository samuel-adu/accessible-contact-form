const contactForm = document.getElementById('contact-form');
const fristNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const queryTypeInput = document.getElementById('query-type');
const messageInput = document.getElementById('message');
const subscribeInput = document.getElementById('subscribe');
const fristNameErrorEl = document.getElementById('first-name-error');
const lastNameErrorEl = document.getElementById('last-name-error');
const emailErrorEl = document.getElementById('email-error');
const queryTypeErrorEl = document.getElementById('query-type-error');
const messageErrorEl = document.getElementById('message-error');
const subscribeErrorEl = document.getElementById('subscribe-error');
const toast = document.getElementById('toast');

function handleSubmit(event) {
  event.preventDefault();
  const contactFormData = new FormData(contactForm);
  let isValid = true;

  // Clear previous error messages
  document.querySelectorAll('.error-message').forEach(function (errorEL) {
    errorEL.innerText = '';
  });

  document.querySelectorAll('.error').forEach(function (errorEL) {
    errorEL.classList.remove('error');
  });

  // valdate inputs
  const firstName = contactFormData.get('firstName');
  if (firstName === '') {
    fristNameErrorEl.innerText = 'This field is required';
    fristNameInput.classList.add('error');
    isValid = false;
  }

  const lastName = contactFormData.get('lastName');
  if (lastName === '') {
    lastNameErrorEl.innerText = 'This field is required';
    lastNameInput.classList.add('error');
    isValid = false;
  }

  const email = contactFormData.get('email');
  const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/;
  if (email === '') {
    emailErrorEl.innerText = 'This field is required';
    emailInput.classList.add('error');
    isValid = false;
  } else if (!isValidEmail.test(email)) {
    emailErrorEl.innerText = 'Please enter a valid email address';
    emailInput.classList.add('error');
    isValid = false;
  }

  const queryType = contactFormData.get('queryType');
  if (!queryType) {
    queryTypeErrorEl.innerText = 'Please select a query type';
    isValid = false;
  }

  const message = contactFormData.get('message').trim();
  if (message === '') {
    messageErrorEl.innerText = 'This field is required';
    messageInput.classList.add('error');
    isValid = false;
  }

  const subscribe = contactFormData.get('subscribe');
  if (!subscribe) {
    subscribeErrorEl.innerText =
      'To submit this form, please consent to being contacted';
    isValid = false;
  }

  if (isValid) {
    toast.style.display = 'block';

    setTimeout(function () {
      contactForm.reset();
      toast.style.display = 'none';
    }, 5000);
  }
}

contactForm.addEventListener('submit', handleSubmit);
