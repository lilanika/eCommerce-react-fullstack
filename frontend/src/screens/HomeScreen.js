import React, { useState, useEffect } from 'react'
//import products from '../products'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {


  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      // we could do it like this const res = await axios.get('/api/products') with that we have access to res.data Object.We can destructuring that so we can use the data directly
      // access the res.data show it on the localhost500/api/products
      const { data } = await axios.get('/api/products')

      //change the state with product array
      setProducts(data)
    }

    
  //invoke in useEffectt his async function 
    fetchProducts()
  }, [])
  //map through products
  return (
    <>
      <h1>Latest Product</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}></Product>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen

/* Test  H2/ {product.name} */