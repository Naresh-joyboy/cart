import React from 'react'

const Popup = (pushh) => {
 console.log(pushh)
  // const itemss = [
  //   {
  //     id: 1,
  //     img: "./img/image11.jpg",
  //     name: "boat",
  //     price: "$45",
  //   },
  //   {
  //     id: 2,
  //     img: "./img/image22.jpg",
  //     name: "boat",
  //     price: "$45",
  //   },
  //   {
  //     id: 3,
  //     img: "./img/image33.jpg",
  //     name: "boat",
  //     price: "$45",
  //   },
  //   {
  //     id: 4,
  //     img: "./img/image44.jpg",
  //     name: "boat",
  //     price: "$45",
  //   },
  //   {
  //     id: 5,
  //     img: "./img/image55.jpg",
  //     name: "boat",
  //     price: "$45",
  //   },
  //   {
  //     id: 6,
  //     img: "./img/image66.jpg",
  //     name: "boat",
  //     price: "$45",
  //   },
  // ];

  return (
    <div>
    {pushh && (
      <div>
        <div>{pushh.name}</div>
        <div>{pushh.price}</div>
        <div>{pushh.img}</div>
        <button>-</button>
        <button>+</button>
        </div>
        )}
    </div>
  )
}

export default Popup