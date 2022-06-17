// import React, { useEffect, useState } from "react";
// import styles from "./CartStorage.module.css";

// export const CartStorage = (item) => {

  

   
//   // const Counter = () => {
//   //   let a = localStorage.getItem("count");
//   //   //console.log(data);
//   //   if (a) {
//   //     return +a;
//   //   } else {
//   //     return 1;
//   //   }
//   // };

//   const {handleChange}=item
//   const { id, image, price, rating, amount,name,  } = item;
//   const [show, setShow] = useState(0);
//   const [count, setCount] = useState(1);

//   const [total, setTotal] = useState(0);

//   const deletediv = () => {
//     console.log("delete");
//   };

//   const handleInc = () => {
//     setCount(count + 1);
//  setTotal(price+count * price);
//   };
//   const handleDec = () => {
//     if (count > 1) {
//       setCount(count - 1);
//     }
//   };
 
//   //console.log(show);
//   let Counttotal = amount * price;

//   // useEffect(() => {
//   //   localStorage.setItem("items", show);
//   // }, [show]);
//   // useEffect(() => {
//   //   //  setTotal(show, ...total);

//   //   localStorage.setItem("count", count);
//   // }, [count]);


// //  let arr=[]
// // arr.push(total)
// // console.log(arr);
//   return (
//     <>
      // <div className={styles.MainDiv}>
      //   <div>
      //     <img className={styles.imas} src={image} />
      //   </div>
      //   <div className={styles.cartname}>
      //     {" "}
      //     <p>{name}</p>
      //   </div>
      //   <img
      //     onClick={deletediv}
      //     className={styles.deleteIcan}
      //     src="https://img.icons8.com/fluency-systems-regular/344/filled-trash.png"
      //   />
      //   <div className={styles.price}>
      //     {" "}
      //     <button onClick={() => handleChange(item, -1)}>-</button>
      //     {amount}
      //     <button onClick={() => handleChange(item, 1)}>+</button>
      //   </div>

      //   <div className={styles.GrandPricediv}>
      //     {count} *{price}.00={Counttotal}.00
      //   </div>
      // </div>
//     </>
//   );
// };





