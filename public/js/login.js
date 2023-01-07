const router = require("express").Router();
document.getElementById('login-button').addEventListener('click', function() {
    // Initialize the Auth0 client
    const auth0 = await createAuth0Client({
      domain: 'YOUR_AUTH0_DOMAIN',
      client_id: 'YOUR_CLIENT_ID'
    });
    
    // Call the `login` method to open the login flow
    await auth0.loginWithRedirect({
      redirect_uri: 'http://localhost:3000/callback'
    });
  });
  module.exports = router;