import axios from 'axios';
import React from 'react';
import ProductComponent from './ProductComponent';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { createBrowserHistory } from "history";
import { BrowserRouter, Routes, Route} from 'react-router-dom';

const baseUrl = 'https://sf-ecommerce.maqu6194.odns.fr/api/products';


const history = createBrowserHistory();
console.log(history.location.pathname)

export default class ProductListComponent extends React.Component{
  state = {
      id : (history.location.pathname != "/") ? history.location.pathname.match(/\d+/)[0] : null, // get all numbers from the path
      products: [],
      prevPage: null,
      nextPage: null
  }
  componentDidMount(){
    let url = (!history.location.pathname.includes("/details/") && this.state.id != null) ? baseUrl+"?page="+this.state.id : baseUrl;
    url = (history.location.pathname.includes("/details/")) ? baseUrl + "/" + this.state.id : url;
    axios.get(url).then(res => {
        const products =(history.location.pathname.includes("/details/")) ?  [(res.data)] : res.data['hydra:member'];
        this.setState({products});
        this.state.prevPage = (res.data['hydra:view']['hydra:previous'] != null) ? res.data['hydra:view'] : null;
        this.state.nextPage = (res.data['hydra:view']['hydra:next'] != null) ? res.data['hydra:next'] : null;
        console.log(res.data)
        console.log(this.state)
    }).catch()
  }
  render(){

    try{
      return (
        <>
        
        <div className='mt-3 d-flex justify-content-center'>
          <a href='/2'>
            <Button variant="primary">{"<"}</Button>
          </a>
            <Button variant="primary">{">"}</Button>
          </div>
        <Container className='mt-3 justify-content-center'>
            <Row>
              {this.state.products.map(productDatas=>(
                <Col md={4}>
                  <ProductComponent product={productDatas}/>
                </Col>
                ))}
            </Row>
          </Container>
          
        </>
      )
    }
    catch{
      return(
        <span>error</span>
      )
    }
  }

}