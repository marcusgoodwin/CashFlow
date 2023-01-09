
const form = document.getElementById('sign-up-form');
console.log(form);
console.log(document);
// Adding a submit listener to the form
form.addEventListener('submit', (e) => {
  // Preventing the default submission behavior
    e.preventDefault();

  // Get the form data
  const formData = new FormData(form);
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');

  // Create an object to hold the user's data
  const user = {
    name: name,
    email: email,
    password: password,
  };

  // Send the POST request to the API with the user data
  fetch('/apis/createUser', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })

});