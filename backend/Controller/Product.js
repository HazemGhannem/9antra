const products = require('../Model/Product')
const asyncHandler = require('express-async-handler')



const getProducts = asyncHandler (async (req, res) => {
    const product = await products.find({})
    res.json(product)
})
const getProductId = asyncHandler (async (req, res) => {
    const product= await products.findById(req.params.id)
    if (product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product not found')
        
    }
   
})

const AdminDeleteProduct = asyncHandler(async (req, res) => {
  
    const product = await products.findByIdAndDelete(req.params.id)
  
  
    if (product) {
      res.json({message: 'product deleted'})
    } else {
      res.status(404)
      throw new Error('product not deleted')
    }
  })


  const CreateProduct = asyncHandler(async (req, res) => {
    const {title,image,price,description}=req.body
    const product = new products({
      title:title,
      image: image,
      price:price,
      description:description,
    })
    const createproduct = await product.save()
    res.status(201).json(createproduct )
    
  })


  const UpdateProduct = asyncHandler(async (req, res) => {
    const {title,image,price,description}=req.body
  
    
   const product = await products.findById(req.params.id)

   if (product) {
    product.title=title
    product.image=image
    product.description=description
    product.price=price
    const updateproduct = await product.save()
    res.json(updateproduct)
   }else{
    res.status(404)
    throw new Error ('Product not found')
   }
    
  })
  
module.exports = {getProducts ,getProductId,AdminDeleteProduct,UpdateProduct,CreateProduct}