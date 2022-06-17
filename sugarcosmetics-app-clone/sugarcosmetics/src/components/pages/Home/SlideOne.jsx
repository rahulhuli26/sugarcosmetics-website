import React, { useEffect, useState } from "react";
import { ShowData } from "../Carddiscreption/ShowData";
import { ShowDataHome } from "../Carddiscreption/ShowDataHome";
// import styles from './Delivery.module.css'
import styles from "../Styles/Default.module.css";

function SlideOne() {
  const [data, setData] = useState([]);
  const [count,setCount] = useState(0);
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    let getData = async () => {
      try {
        let res = await fetch("http://localhost:8080/Treanding");
        let info = await res.json();
        console.log(info);
        setData([...info]);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  
   useEffect(() => {
     let newdata11 = [];
     for (let i = 0; i < 4; i++) {
       newdata11.push(data[i]);
     }
    //  console.log(newdata11);
     let newUpdatedData11 = newdata11.map((elem) => elem);
     setNewData(newUpdatedData11);
   }, [data]);

     
  const handleLeft = ()=>{

   
      if (count > 3 ) {
          let one = count - 1;
          setCount(one);
          // console.log(count);

      let newdata = [];
      for (let i = count; i > count - 4; i--) {
        newdata.push(data[i]);
      }
      // console.log(newdata);
      let newUpdatedData = newdata.map((elem) => elem);
      setNewData(newUpdatedData);
    }
  }

  const handleRight = () => {
    
    
     if (count < data.length - 2) {
        let one = count + 1;
        setCount(one);
       let newdata = [];
       for (let i = count; i < count + 4; i++) {
         newdata.push(data[i]);
       }
      //  console.log(newdata);
       let newUpdatedData = newdata.map((elem) => elem);
       setNewData(newUpdatedData);
     }

  };
   useEffect(()=>{
        let newdata = [];
        for (let i = 0; i <4; i++) {
          newdata.push(data[i]);
        }
        console.log(newdata);
        let newUpdatedData = newdata.map((elem) => elem);
        setNewData(newUpdatedData);
   },[])
     
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "95%",
          height: "400px",
          // border: "1px solid gray",
          margin: "auto",
          marginTop: "30px",
          marginBottom:"60px"
        }}
      >
        <div style={{  width: "10%" }}>
          <div
            id="left"
            onClick={handleLeft}
            style={{ marginTop: "180px", marginLeft: "60px" }}
          >
            <img src="https://in.sugarcosmetics.com/less-than.png" alt="left" />
          </div>
        </div>
        <div style={{  width: "80%" }}>
          <div id={styles.contain}>
            {newData.map((item, index) => {
              return <ShowDataHome {...item} />;
            })}
          </div>
        </div>
        <div style={{  width: "10%" }}>
          <div id="right" onClick={handleRight} style={{ marginTop: "170px" ,marginLeft:"-80px"}}>
            <img
              src="https://in.sugarcosmetics.com/greater-than.png "
              alt="right"
            />
          </div>
        </div>
      </div>

      {/* n */}
    </>
  );
}

export default SlideOne;

