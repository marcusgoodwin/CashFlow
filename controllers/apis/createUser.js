const router = require('express').Router();
const User = require('../../models/userModel');

router.post('/createUser', async (req, res) => {
       const result = await User.create(
        req.body
       )   .then((response) => response.json())
       .then((data) => {
         console.log(data);
         return data;
        }) .catch((err) => {
           console.log(err);
        return err})
        return result;
});

module.exports = router;