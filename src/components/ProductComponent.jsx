import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';

function ProductComponent(props){
  try{
    return (
      <a href={`/details/${props.product.id}`}>
        <Card style={{ width: '18rem'}} className='mx-auto'>
          <Card.Body>
            <Card.Title>{props.product.name}</Card.Title>
            <Card.Subtitle>{props.product.category.name}</Card.Subtitle>
            <Card.Text>{props.product.price} €</Card.Text>
            <Button variant="primary">Acheter</Button>
          </Card.Body>
        </Card>
      </a>
  );
  }
  catch{
  }
    
}

export default ProductComponent;





