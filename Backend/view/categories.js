const router = require('express').Router();
const {
    allTopProducts,
} = require('../controller/index')

router.get('/:categoryname/products', allTopProducts);


module.exports = router;