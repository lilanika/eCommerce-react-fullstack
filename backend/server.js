/*  without ES modules
const express = require('express')
const dotenv = require('dotenv')
const products = require('./data/products')
*/

/* connectinon to DB and linking to file where we fetch data from MongoDB */ 

import express from 'express'
import dotenv from 'dotenv'
//import products  from './data/products.js'
import connectDB from './config/db.js'
import colors from 'colors'

import productRoutes from './routes/productRoutes.js'


dotenv.config();

connectDB();

const app = express()

//creating a route 
app.get('/', (req,res)=>{
   res.send('API is running')
})

// we mount it here: 
//antything that goes to /api/products is going to be 
//linked to productRoutes. 
app.use('/api/products', productRoutes )

/* moved to productRoutes './routes/productRoutes.js'
//creating a route to display the product array under this adress
router.get('/api/products', (req,res)=>{
   //u can use res.send both will converted the  product array to json data //respont with the  Products. js Array 
    res.json(products)
 })
 
 //creating a route to display a single product 
 router.get('/api/products/:id', (req,res)=>{
   //u can  get the /:id through req object 
   const product = products.find(p => p._id === req.params.id)
    res.json(product)
 })
 
*/ 

const PORT = process.env.PORT  || 5000

app.listen(5000, console.log(`server running in ${process.env.NODE_ENV} on port ${5000}`.rainbow.bold))


