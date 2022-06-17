import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";

function Header() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  console.log(search);
  useEffect(() => {
    let getData = async (search) => {
      try {
        let res = await fetch(`http://localhost:9000/search?name=${search}`);
        let info = await res.json();
        console.log(info);
        setData([...info]);
      } catch (error) {
        console.log(error);
      }
    };
    getData(search);
  }, [search]);

  const handleChange = (e) => {
    var value = e.target.value;
    setSearch(value);
  };

  // const handleClick = ()=>{
  //   var value= document.querySelector("#inp").value;
  //   console.log(value)
  //     let new_data = data.filter((item)=>{
  //       return item.name.includes("matt")
  //     })
  //   console.log(new_data)
  // }

  return (
    <>
      <div className={styles.div1}>
        FREE eyeshadow palette worth 1199 on a spend of 1199
      </div>
      <div className={styles.div2}>
        <div style={{ marginLeft: "60px" }}>
          <Link to="/">
            <img
              src="https://in.sugarcosmetics.com/desc-images/SUGARLogo1.png"
              alt=""
            />
          </Link>
        </div>
        <div>
          <div className={styles.input}>
            <input
              name="search"
              id="inp"
              onChange={handleChange}
              className={styles.input1}
              type="text"
              placeholder='Try "Liquid Lipstick"'
            />
            <button className={styles.button1}>Search</button>
            <div className={styles.dropdown2}>
              <p style={{ fontSize: "small", color: "orange" }}>Frequently</p>
              <div style={{ display: "flex", gap: "15px" }}>
                <div style={{ fontSize: "14px" }}>24hr-foundations</div>
                <div style={{ fontSize: "14px" }}>wallets</div>
                <div style={{ fontSize: "14px" }}>lipsticks</div>
              </div>
              <p style={{ fontSize: "small", color: "orange" }}>Hot picks</p>
              <div style={{ display: "flex", gap: "25px" }}>
                <div style={{ display: "flex", gap: "25px" }}>
                  {data.map((item) => (
                    <div key={item.id}>
                      <img
                        style={{ height: "58px", width: "50px" }}
                        src={item.image}
                        alt=""
                      />
                      <p style={{ fontSize: "12px" }}>{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.imgdiv1} onClick={() => setShow(true)}>
          <div>
            <img
              src="https://in.sugarcosmetics.com/desc-images/person.png"
              alt=""
            />
          </div>
          <span style={{ cursor: "pointer" }}>Login/Register</span>
        </div>
        <div style={{ display: "flex", paddingTop: "15px", gap: "20px" }}>
          <span>
            <i className="fa-solid fa-heart"></i>
          </span>
          <span>
            <Link to="/cart">
              <i className="fa-solid fa-cart-arrow-down"></i>
            </Link>
          </span>
          <div>
            <img
              className={styles.icon3}
              src="https://in.sugarcosmetics.com/desc-images/discountIcon.svg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/*     
    <div className={styles.div3}>
      <div className={styles.makeup} ><Link to="/makeup">MAKEUP</Link> */}

      <div className={styles.div3}>
        <div className={styles.makeup}>
          <Link
            to="/makeup"
            style={{ fontSize: "14px", fontFamily: "Quicksand" }}
            id={styles.link}
          >
            MAKEUP
          </Link>

          <div className={styles.dropdown1}>
            <Link to="/lips">LIPS</Link>
            <Link to="/face">FACE</Link>
            <Link to="/eyes">EYES</Link>
          </div>
        </div>

        <div className={styles.makeup}>
          <Link
            to="/brushes"
            style={{ fontSize: "14px", fontFamily: "Quicksand" }}
            id={styles.link}
          >
            BRUSHES
          </Link>
          <div className={styles.dropdown1}>
            <Link to="/facebrushes">FACE BRUSHES</Link>
            <Link to="/eyebrushes">EYE BRUSHES</Link>
          </div>
        </div>
        <div className={styles.makeup}>
          <Link
            to="/skincare"
            style={{ fontSize: "14px", fontFamily: "Quicksand" }}
            id={styles.link}
          >
            SKINCARE
          </Link>
          <div className={styles.dropdown1}>
            <Link to="/moisturisers">MOISTURISERS</Link>
            <Link to="/masks">MASKS</Link>
            <Link to="/settingmists">SETTING MISTS</Link>
            <Link to="/coffeculturerange">COFFEE CULTURE RANGE</Link>
            <Link to="/sheetmustcombo">SHEET MUSK COMBO</Link>
            <Link to="/citrusgoatrealrange">CITRUS GOAT REAL RANGE</Link>
            <Link to="/aquaholicrange">AQUAHOLIC RANGE</Link>
          </div>
        </div>
        <div className={styles.makeup}>
          <Link
            to="/trending"
            style={{ fontSize: "14px", fontFamily: "Quicksand" }}
            id={styles.link}
          >
            TRENDING
          </Link>
          <div className={styles.dropdown1}>
            <Link to="/sugarmerchstation">SUGAR MERCH STATION</Link>
            <Link to="/makeupkits">MAKE UP KITS</Link>
            <Link to="/bestsellers">BESTSELLERS</Link>
          </div>
        </div>

        {/* <div className='textdecorat' ><Link to="/blog" id= {styles.link}>BLOG</Link></div>
          <div><Link className='textdec' to="/offers" id= {styles.link}>OFFERS</Link></div>
        </div> */}

        <div>
          <Link
            to="/blog"
            style={{ fontSize: "14px", fontFamily: "Quicksand" }}
            id={styles.link}
          >
            BLOG
          </Link>
        </div>
        <div>
          <Link
            to="/offers"
            style={{ fontSize: "14px", fontFamily: "Quicksand" }}
            id={styles.link}
          >
            OFFERS
          </Link>
        </div>
      </div>
      {/* </div> */}
      {/* // </div> */}
      {show && (
        <>
          <div className={styles.bgmodal}>
            <div className={styles.modalcontents}>
              <div id={styles.slide}>
                <img
                  id={styles.bg}
                  src="https://in.sugarcosmetics.com/Login_bg.svg"
                  alt=""
                />
              </div>

              <div id={styles.form}>
                <p id={styles.head}>
                  <span
                    style={{ marginRight: "50px", cursor: "pointer" }}
                    onClick={() => setShow(false)}
                  >
                    <i class="fa-solid fa-xmark"></i>
                  </span>
                  Login/Sign Up Using Phone
                </p>
                <div id={styles.numHold}>
                  <p id={styles.code}>+91</p>
                  <input type="text" id={styles.number} maxlength="1" />
                  <input type="text" id={styles.number} maxlength="1" />
                  <input type="text" id={styles.number} maxlength="1" />
                  <input type="text" id={styles.number} maxlength="1" />
                  <input type="text" id={styles.number} maxlength="1" />
                  <input type="text" id={styles.number} maxlength="1" />
                  <input type="text" id={styles.number} maxlength="1" />
                  <input type="text" id={styles.number} maxlength="1" />
                  <input type="text" id={styles.number} maxlength="1" />
                  <input type="text" id={styles.number} maxlength="1" />
                  <button id={styles.request}>Request OTP</button>
                </div>

                <p id={styles.enter}>
                  Enter your phone number to request an OTP
                </p>
                <hr id={styles.hr} />
                <p id={styles.digit}>
                  Enter the 4 digit OTP received on your phone.
                </p>

                <div id={styles.otpHold}>
                  <input type="text" id={styles.otp} maxlength="1" />
                  <input type="text" id={styles.otp} maxlength="1" />
                  <input type="text" id={styles.otp} maxlength="1" />
                  <input type="text" id={styles.otp} maxlength="1" />
                </div>
                <button id={styles.verify}>Verify OTP</button>

                <div id={styles.condition}>
                  <input type="checkbox" id={styles.check} />
                  <p id={styles.whatsapp}>
                    Get Important Updates on Whatsapp.{" "}
                  </p>
                  <a id={styles.terms} href="">
                    Terms and Conditions
                  </a>
                </div>

                <div id={styles.extra}>
                  <p id={styles.p1}>
                    Registering for this site allows you to access your order
                    status and history. Just fill in the fields below, and we'll
                    get a new account set up for you in no time. We will only
                    ask you for information necessary to make the purchase
                    process faster and easier.
                  </p>

                  <div id={styles.extraInfo}>
                    <p id={styles.p2}>
                      By Signing up or logging in, you agree to our{" "}
                    </p>
                    <a href="" id={styles.terms2}>
                      Terms and Conditions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Header;
