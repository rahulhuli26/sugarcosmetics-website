import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CheckOut.module.css";

function CheckOut() {
  const navigate = useNavigate();
  const [Address, setItems] = useState([]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("Address"));
    if (items) {
      setItems(items);
    }
  }, []);
  const [Cost, setCost] = useState(0);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("Cost"));
    if (items) {
      setCost(items);
    }
  }, []);
  console.log(Address);
  return (
    <div id={styles.parent}>
      <div id={styles.main}>
        <h2 id={styles.h2}>Order Details</h2>
        <div id={styles.info}>
          <div id={styles.child}>
            <h5>Name:</h5>
            <h5 id={styles.h5}> {Address.name}</h5>
          </div>
          <div id={styles.child}>
            <h5>Address:</h5>
            <h5 id={styles.h5}>
              {Address.flatNumber},{Address.address},{Address.city},
              {Address.country} ,{Address.pincode}{" "}
            </h5>
          </div>
          <div id={styles.child}>
            <h5>Total Price :</h5>
            <h5 id={styles.h5}>{Cost} </h5>
          </div>
        </div>

        <div id={styles.div}>
          <h2>Thank You For Shopping!!</h2>
        </div>
        <div id={styles.path} onClick={() => navigate("/")}>
          <a href="/">Continue Shopping</a>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
