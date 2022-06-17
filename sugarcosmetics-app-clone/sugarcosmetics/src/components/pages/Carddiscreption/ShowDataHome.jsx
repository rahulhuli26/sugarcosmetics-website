import React, { useEffect, useState } from "react";
import styles from "./MakeUp.module.css";
import { v4 as uuid } from "uuid";

// import { useParams } from 'react-router-dom';

export const ShowDataHome = (item) => {
    
 // console.log(item);
  // const getDatafromLS = () => {
  //   let car = localStorage.getItem("cartData");
  //   //console.log(data);
  //   if (car) {
  //     return JSON.parse(car);
  //   } else {
  //     return [];
  //   }
  // };

  //  const [CartData, setCardData] = useState(getDatafromLS());
  const [review, setReview] = useState(0);
   const { image, rating, price, name, id } = item;
    let amount = +item.amount;

  // useEffect(() => {
  //   localStorage.setItem("cartData", JSON.stringify(CartData));
  // }, [CartData]);
  // const AddToCart = () => {
  //   console.log("hai");
  //   const cart = { image, rating, price, name, id: uuid() };
  //   console.log([cart, ...CartData]);
  //   setCardData([...CartData, cart]);
  // };
  // const show = () => {
  //   console.log("hai");
  //   const cart = { image, rating, price, name, id: uuid() };
  //   console.log(cart);
  //   setCardData([cart, ...CartData]);
  // };

  useEffect(() => {
    let rand = Math.floor(Math.random() * 1000);
    setReview(rand);
  }, []);

  return (
    <>
      <div id={styles.unit}>
        <img id={styles.img} src={image} />
        <p id={styles.name}>{name}</p>
        <p id={styles.price}>RS .{price}</p>

        <div id={styles.ratingHold}>
          <img
            id={styles.star}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuW-ijbF7ZlfvwARw20McEOaUkKA_HdCK7vA&usqp=CAU"
            alt=""
          />
          <p id={styles.rating}>
            {rating} ({review}){" "}
          </p>
        </div>

        <div id={styles.btnHold}>
          <button>
            <img
              className={styles.whislisticon}
              src="https://cdn3.iconfinder.com/data/icons/marketing-e-commerce/128/icons_-_marketing-41-512.png"
            />
          </button>
          <button id={styles.btn}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

