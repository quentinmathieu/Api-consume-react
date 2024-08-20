import axios from 'axios';
import React from 'react';
import ProductComponent from './ProductComponent';
import {Container, Row, Col} from 'react-bootstrap';


export default class ProductListComponent extends React.Component{
  state = {
      products: []
  }
  componentDidMount(){
    axios.get('https://sf-ecommerce.maqu6194.odns.fr/api/products').then(res => {
        const products = res.data['hydra:member'];
        this.setState({ products });
    }).catch()
  }
  render(){
    try{
      return (
        <Container className='mt-3'>
            <Row>
              {this.state.products.map(productData=>(
                  <Col md={4}> 
                    <ProductComponent product={productData}/>
                  </Col>
                ))}
            </Row>
          </Container>
      )
    }
    catch{
      return(
        <span>44</span>
      )
    }
  }

}





