import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./MakeUp.module.css";
// import { v4 as uuid } from "uuid";



export const ShowData = ({ item, handleClick }) => {
    
 
  const [review, setReview] = useState(0);
   const { image, rating, price, name, id, catg } = item;
    let amount = +item.amount;

 




  useEffect(() => {
    let rand = Math.floor(Math.random() * 1000);
    setReview(rand);
  }, []);

  return (
    <>
      <div id={styles.unit}>
        {catg === "makeup" || catg === "Lips" ? (
          <Link to={`/${catg}/${id}`}>
            <img id={styles.img} src={image} />
          </Link>
        ) : (
          <img id={styles.img} src={image} />
        )}
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
          <button id={styles.btn} onClick={() => handleClick(item)}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

