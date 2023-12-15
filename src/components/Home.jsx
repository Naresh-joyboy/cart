import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './total.css'

const Cart = ({ item, handleclick }) => {
  return (
    <div className="cartt">
      <div className="col-md-4 mb-3">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={item.img} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.price}</Card.Text>
            <Button className='btnn'variant="primary" onClick={() => {handleclick(item)}}>Add cart</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

const Home = ({ handleclick ,productItems}) => {
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          {productItems.map((item) => (
            <Cart key={item.id} item={item} handleclick={handleclick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
