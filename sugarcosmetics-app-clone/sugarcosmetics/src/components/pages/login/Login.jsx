import React from "react";
import styles from "./Login.module.css";

function Login() {
  const [show,setShow] = React.useState(false)
  return (
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
              <span style={{marginRight:"50px"}} onClick={()=>setShow(false)}>
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

            <p id={styles.enter}>Enter your phone number to request an OTP</p>
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
              <p id={styles.whatsapp}>Get Important Updates on Whatsapp. </p>
              <a id={styles.terms} href="">
                Terms and Conditions
              </a>
            </div>

            <div id={styles.extra}>
              <p id={styles.p1}>
                Registering for this site allows you to access your order status
                and history. Just fill in the fields below, and we'll get a new
                account set up for you in no time. We will only ask you for
                information necessary to make the purchase process faster and
                easier.
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
  );
}

export default Login;
