const form = document.getElementById('sign-up-form');
console.log(form);
console.log(document);
// Adding a submit listener to the form
form.addEventListener('submit', (e) => {
  // Preventing the default submission behavior
    e.preventDefault();

  // Get the form data
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();
  // const budget = document.querySelector('#budget').value.trim();
  // Send the POST request to the API with the user data
  fetch('/apis/createUser', {
    method: 'POST',
    body: JSON.stringify({name, email, password}),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }).then(() => {
    document.location.replace('/input');
    }).catch((err) => {
      console.log(err);
    })
});