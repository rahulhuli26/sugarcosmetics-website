import React, { useEffect, useState } from "react";
import { ShowData } from "../Carddiscreption/ShowData";

import { v4 as uuid } from "uuid";
import styles from "../Styles/Default.module.css";
function Face({ handleClick }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    let getData = async () => {
      try {
        let res = await fetch("http://localhost:8080/Face");
        let info = await res.json();
        console.log(info);
        setData([...info]);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const handleH2l = () => {
    let new_data = data.sort((a, b) => {
      return b.price - a.price;
    });
    console.log(new_data);
    setData([...new_data]);
  };

  const handleL2h = () => {
    let sorted_data = data.sort((a, b) => {
      return a.price - b.price;
    });

    console.log(sorted_data);
    setData([...sorted_data]);
  };
  return (
    <>
      <div id={styles.infoContain}>
        <div id={styles.info}>
          <h1 id={styles.h1}>Face :</h1>
          <p id={styles.items}>{data.length} items</p>
        </div>

        <div id={styles.sortData}>
          <div id={styles.opt}>
            <div id={styles.top}>
              <img
                className={styles.whislisticon}
                src="https://in.sugarcosmetics.com/desc-images/sortIcon.png"
              />
              <p id={styles.items}>Sort</p>
            </div>

            <div id={styles.sorting}>
              <div id={styles.Select}>
                <p>Select Sorting</p>
                <p> clear All</p>
              </div>
              <hr />
              <div id={styles.line}>
                <p>Relevance</p>
              </div>
              <hr />
              <div id={styles.line}>
                <p onClick={handleH2l}>Price - High to Low</p>
              </div>{" "}
              <hr />
              <div id={styles.line}>
                <p onClick={handleL2h}>Price - Low to High</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id={styles.contain}>
        {data.map((items) => (
          <ShowData key={uuid()} item={items} handleClick={handleClick} />
        ))}
      </div>
    </>
  );
}

export default Face;
