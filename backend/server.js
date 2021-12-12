const express = require('express')
const products = require('./data/products')

const app = express()

//creating a route 
app.get('/', (req,res)=>{
   res.send('API is running')
})

//creating a route to display the product array under this adress
app.get('/api/products', (req,res)=>{
  //u can use res.send both will converted the  product array to json data
   res.json(products)
})

//creating a route to display a single product 
app.get('/api/products/:id', (req,res)=>{
  //u can  get the /:id through req object 
  const product = products.find(p => p._id === req.params.id)
   res.json(product)
})

app.listen(5000, console.log('server running on port 5000'))


/* to test it in the console: node backend/server */ 