import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'



// @dec Fetch all products 
// @route GET/api/products 
// @access Public
router.get('/', asyncHandler(async (req,res) =>{

  //empty Object give us everything
  //Mongoose methods always return a promise. 
  const products =  await Product.find({}) 
   res.json(products)
}))

// @dec Fetch single product
// @route GET/api/products/:id
// @access Public
router.get('/:id', asyncHandler( async (req,res)=>{

  const product = await Product.findById( req.params.id)
  if(product) {
    res.json(product)
  }else {

    // before: res.status(404).json({message: 'Product not found'})
    //Now we have the custom error Handler: 
    res.status(404)
    throw new Error('Product not found')
  }

}))

export default router