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
            <Button variant="primary" onClick={() => { handleclick(item) }}>Add cart</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

const Home = ({ handleclick }) => {
  const items = [
    {
      id: 1,
      img: "./img/image11.jpg",
      name: "boat",
      price: "$45",
    },
    {
      id: 2,
      img: "./img/image22.jpg",
      name: "boat",
      price: "$45",
    },
    {
      id: 3,
      img: "./img/image33.jpg",
      name: "boat",
      price: "$45",
    },
    {
      id: 4,
      img: "./img/image44.jpg",
      name: "boat",
      price: "$45",
    },
    {
      id: 5,
      img: "./img/image55.jpg",
      name: "boat",
      price: "$45",
    },
    {
      id: 6,
      img: "./img/image66.jpg",
      name: "boat",
      price: "$45",
    },
  ];
 
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          {items.map((item) => (
            <Cart key={item.id} item={item} handleclick={handleclick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
