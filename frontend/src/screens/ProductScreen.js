import React, { useState, useEffect } from 'react'
import { Link , useParams } from 'react-router-dom'
//import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
//import Message from '../components/Message'
//import Loader from '../components/Loader'
import Meta from '../components/Meta'
//import products from '../products' to test frontend
import axios from 'axios'


const ProductScreen = () => {

const params = useParams()

  //because its one produkt is an object
  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchProduct = async () => {
   
      const { data } = await axios.get(`/api/products/${params.id}`) 

      //change the state with product array
      setProduct(data)
    }

    
  //invoke in useEffectt his async function 
    fetchProduct()
  }, [])



  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>

      <Meta title={product.name} />
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  className="btn-block "
                  type="button"
                  disabled={product.countInStock === 0} >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen



/*
ProductSCREEN

This we have use to test the frontend: 
 const params = useParams()
  const product = products.find((p) => p._id === params.id)
*/ 


/* 
Here we want to show a single produkt. 
check what kind of data one object is. Is a Objekt! its important for our hook. Every  new state needs his own name. 


we want to get the ID from the URL 
How we do it? 

We do that with a variable and props.match.id
`/api/products${match.params.id




*/