import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';

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
  }
    
}

export default ProductComponent;





