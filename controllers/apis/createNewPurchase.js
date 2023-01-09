const router = require('express').router();
// require the purchases model
router.post('/createNewPurchase', async (req, res) => {
    const result = await Transaction.create(
        req.body
       )   .then((response) => response.json())
       .then((data) => {
         console.log(data);
         return data;
       }) .catch((err) => {
        return err})
        return result;
});

module.exports = router;