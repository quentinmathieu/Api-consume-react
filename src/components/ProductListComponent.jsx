import axios from 'axios';
import React from 'react';
import ProductComponent from './ProductComponent';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { createBrowserHistory } from "history";
import { CiShop } from "react-icons/ci"

const baseUrl = 'https://sf-ecommerce.maqu6194.odns.fr/api/products';
const history = createBrowserHistory();

export default class ProductListComponent extends React.Component{
  state = {
      id : (history.location.pathname != "/") ? history.location.pathname.match(/\d+/)[0] : null, // get all numbers from the path
      products: [],
      prevPage: null,
      nextPage: null,
      prevPageDisable: "", 
      nextPageDisable: "" 
  }
  componentDidMount(){
    let url = (!history.location.pathname.includes("/details/") && this.state.id != null) ? baseUrl+"?page="+this.state.id : baseUrl;
    url = (history.location.pathname.includes("/details/")) ? baseUrl + "/" + this.state.id : url;
    axios.get(url).then(res => {
        const products =(history.location.pathname.includes("/details/")) ?  [(res.data)] : res.data['hydra:member'];
        this.setState({products});


        // create pagination buttons for the list views
        if (!history.location.pathname.includes("/details/")){
          let prevPage = (res.data['hydra:view']['hydra:previous'] != null) ? res.data['hydra:view']['hydra:previous'].match(/\d+/)[0] : null;
          let nextPage = (res.data['hydra:view']['hydra:next'] != null) ? res.data['hydra:view']['hydra:next'].match(/\d+/)[0] : null;
          this.setState({prevPage});
          this.setState({nextPage});
          let prevPageDisable = (this.state.prevPage == null) ? "disabled" : "";
          let nextPageDisable = (this.state.nextPage == null) ? "disabled" : "";
          this.setState({prevPageDisable});
          this.setState({nextPageDisable});

          let firstPage = (this.state.prevPage == null) ? null : res.data['hydra:view']['hydra:first'].match(/\d+/)[0];
          let lastPage = (this.state.nextPage == null) ? null : res.data['hydra:view']['hydra:last'].match(/\d+/)[0];
          this.setState({firstPage});
          this.setState({lastPage});
        }
        else{
          let prevPageDisable = "opacity-0";
          let nextPageDisable = "opacity-0";
          this.setState({prevPageDisable});
          this.setState({nextPageDisable});
        }
    }).catch()
  }
  render(){

    try{
      return (
        <>
        
        <Container className='mt-2 mb-3 d-flex justify-content-center position-relative'>
          <a href="/" >
            <CiShop className='display-6 position-absolute top-0 start-0 ms-1'/>
          </a>
          <a href={this.state.firstPage}>
            <Button className={`${this.state.prevPageDisable}`}>{"≪"}</Button>
          </a>
          <a href={this.state.prevPage}>
            <Button className={`${this.state.prevPageDisable}`}>{"<"}</Button>
          </a>
          <a href={this.state.nextPage}>
            <Button variant="primary" className={`${this.state.nextPageDisable}`}>{">"}</Button>
          </a>
          <a href={this.state.lastPage}>
            <Button className={`${this.state.nextPageDisable}`}>{"≫"}</Button>
          </a>
        </Container>
        <Container className='mt-3'>
            <Row>
              {this.state.products.map(productDatas=>(
                <Col className='my-2'>
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