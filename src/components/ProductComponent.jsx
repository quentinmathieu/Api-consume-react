import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import React from 'react';
import { createBrowserHistory } from "history";


function ProductComponent(props){
  try{
    return (
      <Card style={{ width: '18rem'}}>
        <Card.Body>
          <Card.Title>{props.product.name}</Card.Title>
          <Card.Subtitle>{props.product.category.name}</Card.Subtitle>
          <Card.Text>{props.product.price} €</Card.Text>
          <Button variant="primary">Acheter</Button>
        </Card.Body>
      </Card>
  );
  }
  catch{
    console.log('meh')
  }
    
}

export default ProductComponent;


// export default class ProductDetails extends React.Component{
//     state = {
//         product: null
//     }
//     componentDidMount(){
//         const history = createBrowserHistory();
//         let id = history.location.pathname.match(/\d+/)[0] // get all numbers from the path
//         this.setState(null);
//         axios.get('https://sf-ecommerce.maqu6194.odns.fr/api/products/'+id).then(res => {
//           const product = res.data;

//           this.setState({ product });
//       }).catch()
//     }
//     render(){
//       return ProductComponent(this.state)
//     }
// }






