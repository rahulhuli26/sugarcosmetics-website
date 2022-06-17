import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./Color.module.css";
export const SinglePage = () => {
  const [data, setData] = useState({});
  let { id } = useParams();

  const [color, setColor] = useState([]);

  useEffect(() => {
    const hadllecall = async () => {
      try {
        let res = await fetch(`http://localhost:8080/makeup/${id}`);
        let data = await res.json();
        // console.log(data);
        setData(data);
      } catch (e) {
        console.log(e);
      }
    };
    hadllecall();
  }, []);
  const {
    hex_value1,
    hex_value2,
    hex_value3,
    hex_value4,
    hex_value5,
    hex_value6,
    hex_value8,
    hex_value9,
    hex_value10,
    hex_value11,
    hex_value12,
    hex_value13,
    hex_value14,
    hex_value16,
    hex_value15,
    hex_value17,
    hex_value18,
    hex_value19,
    hex_value20,
  } = data;

  return (
    <>
      {!!data && (
        <>
          <div className={styles.mainContine}>
            <div className={styles.firstHalf}>
              <img className={styles.img} src={data.image} alt={data.name} />
              <div>
                <h2>{data.name}</h2>
                <h3>RS .{data.price}</h3>
                <p className={styles.discpriction}>{data.description}</p>
              </div>
            </div>
            <div className={styles.secondHalf}>
              <div>
                <div className={styles.colorDiv}>
                  <div
                    className={styles.MainDiv}
                    style={{ backgroundColor: "#B28378" }}
                  ></div>
                  <div
                    className={styles.MainDiv}
                    style={{ backgroundColor: "#A36B5E" }}
                  ></div>
                  <div
                    className={styles.MainDiv}
                    style={{ backgroundColor: "#966A60" }}
                  ></div>
                  <div
                    className={styles.MainDiv}
                    style={{ backgroundColor: "#8F5954" }}
                  ></div>
                  <div
                    className={styles.MainDiv}
                    style={{ backgroundColor: "#8F5954" }}
                  ></div>
                  <div
                    className={styles.MainDiv}
                    style={{ backgroundColor: "#975348" }}
                  ></div>

                  <div
                    className={styles.MainDiv}
                    style={{ backgroundColor: "#865B69" }}
                  ></div>
                  <div
                    className={styles.MainDiv}
                    style={{ backgroundColor: "#8E474D" }}
                  ></div>
                  <div
                    className={styles.MainDiv}
                    style={{ backgroundColor: "#5F2820" }}
                  ></div>
                  <div
                    className={styles.MainDiv}
                    style={{ backgroundColor: "#C095BC" }}
                  ></div>
                  <div
                    className={styles.MainDiv}
                    style={{ backgroundColor: "#743A6A" }}
                  ></div>
                  <div
                    className={styles.MainDiv}
                    style={{ backgroundColor: "#965564" }}
                  ></div>
                  <div
                    className={styles.MainDiv}
                    style={{ backgroundColor: "#BF2C7E" }}
                  ></div>
                  <div
                    className={styles.MainDiv}
                    style={{ backgroundColor: "#CE435D" }}
                  ></div>
                  <div
                    className={styles.MainDiv}
                    style={{ backgroundColor: "#DA6952" }}
                  ></div>
                  <div
                    className={styles.MainDiv}
                    style={{ backgroundColor: "#A33C37" }}
                  ></div>
                  <div
                    className={styles.MainDiv}
                    style={{ backgroundColor: "#C23D3C" }}
                  ></div>
                  <div
                    className={styles.MainDiv}
                    style={{ backgroundColor: "#AF4051" }}
                  ></div>
                  <div
                    className={styles.MainDiv}
                    style={{ backgroundColor: "#914B4C" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
