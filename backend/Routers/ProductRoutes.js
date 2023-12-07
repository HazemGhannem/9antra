const express = require('express')
const router = express.Router()
const { getProducts, getProductId,AdminDeleteProduct,CreateProduct,UpdateProduct } = require('../Controller/Product')

router.route('/').get(getProducts).post(CreateProduct)
router.route('/:id')
.get(getProductId)
.delete(AdminDeleteProduct)
.put(UpdateProduct)

module.exports = router