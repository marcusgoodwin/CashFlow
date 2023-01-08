const router = require('express').router();
// require the purchases model
router.post('/createNewPurchase', async (req, res) => {
    try {
       const result = await Purchases.create(
        req.body
       )


    } catch (err) {

    }
});