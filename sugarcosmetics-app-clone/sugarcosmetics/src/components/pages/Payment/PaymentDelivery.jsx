import React, { useEffect, useState } from "react";
import styles from "./paydel.module.css";

import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
const PaymentDelivery = ({ cart, setCart, handleChange }) => {
   const navigate = useNavigate();
  console.log(cart);
  const [Cost, setCost] = useState(0);
  const [shipping, setShpping] = useState(0);
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handleCost();
  };

  const handleCost = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setCost(ans);
  };

  useEffect(() => {
    handleCost();
  });
  const [Address, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("Address"));
    if (items) {
      setItems(items);
    }
  }, []);
  console.log(Address);
  return (
    <>
      <div className={styles.main}>
        <div style={{ display: "block" }}>
          <div style={{ height: "230px" }}>
            <div style={{ height: "35px", paddingTop: "11px" }}>
              <img
                src="	https://in.sugarcosmetics.com/desc-images/PriceDetails.svg"
                width="20px"
                height="20px"
              ></img>
              <span style={{ marginLeft: "10px" }}>Price Details</span>
            </div>

            <div style={{ height: "30px", paddingTop: "5px" }}>
              <img
                src="	https://in.sugarcosmetics.com/desc-images/CartSubtotal.svg"
                width="15px"
                height="15px"
              />
              <span style={{ marginLeft: "10px" }}>Cart Sub Total: </span>
              <span style={{ marginLeft: "80px" }}>₹ {Cost}</span>
            </div>
            <div style={{ height: "30px", paddingTop: "5px" }}>
              <img
                src="https://in.sugarcosmetics.com/desc-images/Shipping_Cost.svg"
                width="15px"
                height="15px"
              />
              <span style={{ marginLeft: "10px" }}>Shipping Cost: </span>
              <span style={{ marginLeft: "80px" }}>₹ 45.0</span>
            </div>
            <div style={{ height: "30px", paddingTop: "5px" }}>
              <img
                src="https://in.sugarcosmetics.com/desc-images/Discount.svg"
                width="15px"
                height="15px"
              />
              <span style={{ marginLeft: "10px", justifyContent: "start" }}>
                Discount Applied:{" "}
              </span>
              <span style={{ marginLeft: "60px" }}>₹ 00.0</span>
            </div>
            <div style={{ height: "30px", paddingTop: "5px" }}>
              <img
                src="https://in.sugarcosmetics.com/desc-images/AmountPayable.svg"
                width="15px"
                height="15px"
              />
              <span style={{ marginLeft: "10px" }}>Amount Payable: </span>
              <span style={{ marginLeft: "65px" }}>₹ {Cost - 45 + 200.69}</span>
            </div>
            <div>
              <span>Including ₹ 200.69 in taxes</span>
            </div>
            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <img
                src="https://in.sugarcosmetics.com/desc-images/shopping_cart.svg"
                width="20px"
                height="20px"
                alt="cartLogo"
              />
              <span style={{ marginLeft: "10px" }}>Order Summary</span>
            </div>
          </div>
          <div
            style={{
              
              height: "100%",
              marginTop: "30px",
              width: "120%",
            }}
          >
            {/* Appending the cart products here */}

            {cart.map((item) => (
              <div className={styles.MainDiv} key={uuid()}>
                <div>
                  <img className={styles.imas} src={item.image} />
                </div>
                <div className={styles.cartname}>
                  {" "}
                  <p>{item.name}</p>
                </div>
                <img
                  className={styles.deleteIcan}
                  onClick={() => handleRemove(item.id)}
                  src="https://img.icons8.com/fluency-systems-regular/344/filled-trash.png"
                />
                <div className={styles.price}>
                  {" "}
                  <button onClick={() => handleChange(item, -1)}>-</button>
                  {item.amount}
                  <button onClick={() => handleChange(item, 1)}>+</button>
                </div>

                <div className={styles.GrandPricediv}>
                  {item.amount} *{item.price}.00={item.amount * item.price}
                  .00
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          {/* adding delivery deatils  down */}
          <div
            style={{ marginTop: "10px", marginBottom: "10px", display: "flex" }}
          >
            <img
              src="https://in.sugarcosmetics.com/desc-images/CustomerInformation.svg"
              width="20px"
              height="20px"
              alt="cartLogo"
            />
            <span style={{ marginLeft: "10px" }}>Cantact Information</span>
          </div>

          <div
            style={{
              //   border: "1px solid red",
              height: "350px",
              backgroundColor: "whitesmoke",
              borderRadius: "15px",
              width: "95%",
            }}
          >
            <div style={{ justifyContent: "space-around", display: "flex" }}>
              <div style={{ marginTop: "10px" }}>
                <span
                  style={{
                    color: "slategray",
                    fontSize: "18px",
                    marginRight: "15px",
                  }}
                >
                  Full Name
                </span>
                <span>{Address.name}</span>
              </div>
              <div style={{ marginTop: "10px" }}>
                <span
                  style={{
                    color: "slategray",
                    fontSize: "18px",
                    marginRight: "15px",
                  }}
                >
                  Phone Number
                </span>
                <span>{Address.number}</span>
              </div>
            </div>
            <div>
              <div style={{ marginTop: "10px" }}>
                <span
                  style={{
                    color: "slategray",
                    fontSize: "18px",
                    marginRight: "15px",
                    marginLeft: "25px",
                  }}
                >
                  Email
                </span>
                <span>{Address.email}</span>
              </div>
            </div>
            <div>
              <div style={{ justifyContent: "space-around", display: "flex" }}>
                <div style={{ marginTop: "10px", marginLeft: "-140px" }}>
                  <span
                    style={{
                      color: "slategray",
                      fontSize: "18px",
                    }}
                  >
                    Delivery Address
                  </span>
                </div>
                <div style={{ marginTop: "10px", marginRight: "-130px" }}>
                  <button
                    style={{
                      backgroundColor: "slategray",
                      height: "35px",
                      padding: "5px 5px",
                      border: "1px solid slategray",
                    }}
                  >
                    Change Address
                  </button>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#fff",
                height: "150px",
                width: "90%",
                margin: "auto",
                marginTop: "10px",
                padding: "0px 10px",
              }}
            >
              <p style={{ marginTop: "15px" }}>Users Name :{Address.name}</p>
              <p>Phone Number :{Address.number}</p>
              <p>
                Address :{Address.flatNumber},{Address.address},{Address.city},{Address.country}
              </p>
              <p>Area pinCode : {Address.pincode}</p>
            </div>
            <div style={{ marginTop: "20px", display: "flex" }}>
              <button
                style={{
                  height: "36.50px",
                  border: "1px solid gray",
                  width: "35%",
                  backgroundColor: "#fff",
                }}
              >
                {" "}
                Continue Shopping
              </button>
              <button
                style={{
                  height: "37px",
                  border: "1px solid gray",
                  width: "70%",
                  backgroundColor: "darkslategray",
                  color: "#fff",
                }}
                onClick={() => navigate("/payment")}
              >
                Proceed to Payment Rs.<span>{Cost - 45 + 200.69}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PaymentDelivery;
