/*  withoug Es Module 
const express = require('express')
const dotenv = require('dotenv')
const products = require('./data/products')


Hier holen wir uns die Daten vom BackendServer (grade von unserer DummyData from Importieren )
*/

import express from 'express'
import dotenv from 'dotenv'
import products  from './data/products.js'
import connectDB from './config/db.js'
import colors from 'colors'


dotenv.config();

connectDB();

const app = express()

//creating a route 
app.get('/', (req,res)=>{
   res.send('API is running')
})

//creating a route to display the product array under this adress
app.get('/api/products', (req,res)=>{
  //u can use res.send both will converted the  product array to json data //respont with the  Products. js Array 
   res.json(products)
})

//creating a route to display a single product 
app.get('/api/products/:id', (req,res)=>{
  //u can  get the /:id through req object 
  const product = products.find(p => p._id === req.params.id)
   res.json(product)
})

const PORT = process.env.PORT  || 5000

app.listen(5000, console.log(`server running in ${process.env.NODE_ENV} on port ${5000}`.rainbow.bold))


