import React from 'react'

import styles from './Footer.module.css'

function Footer() {
  return (
      <>
      <div className={styles.container}>
        <div className={styles.div1}>
        <img style={{height : "120px"}} src="https://in.sugarcosmetics.com/Footer_sugar_icon.png" alt="" />
        </div>
        <div className={styles.div2}>
          
          <a href='https://www.facebook.com/trySUGAR/' target="_blank"><img className={styles.imgdiv1} src="https://in.sugarcosmetics.com/desc-images/facebook.svg" alt="" /></a>
          <a href='' target="_blank"><img className={styles.imgdiv1} src="https://in.sugarcosmetics.com/desc-images/Instagram.svg" alt="" /></a>
          <a href='https://www.pinterest.com/sugarcosmetics/' target="_blank"><img className={styles.imgdiv1} src="https://in.sugarcosmetics.com/desc-images/Pinterest.svg" alt="" /></a>
          <a href='https://sugarcosmetics-blog.tumblr.com/' target="_blank"><img className={styles.imgdiv1} src="https://in.sugarcosmetics.com/desc-images/Tumblr.svg" alt="" /></a>
          <a href='https://www.youtube.com/channel/UCKVqnev2idvmUNKc2b91B8g' target="_blank"><img className={styles.imgdiv1} src="https://in.sugarcosmetics.com/desc-images/Youtube.svg" alt="" /></a>
        </div>
        <div style={{marginLeft : "90px"}}>
          <div className={styles.div3}>
            <div>
              <p style={{fontSize : "large"}}>SUBSCRIBE TO OUR NEWSLETTER</p>
              <input type="text" placeholder='Your Email address' />
              <button>Sign Up</button>
            </div>
          <div className={styles.innerdiv3}>
            <div><p style={{fontSize : "large"}}>GET THE NEW SUGAR APP TODAY.</p></div>
            <div style={{display : "flex" , gap : "20px"}}>
              <p style={{width : "250px" , fontSize : "large" , color : "rgb(131,131,131)"}}>Tap into a better shopping experience.</p>
              <a href='https://sugarcosmetics.app.link/WebFApp' target="_blank"><img style={{height : "30px" , width : "100px" , marginTop : "15px"}} src="https://in.sugarcosmetics.com/playstore.png" alt="" /></a>
              <a href='https://sugarcosmetics.app.link/WebFApp' target="_blank"><img style={{height : "30px" , width : "100px" , marginTop : "15px"}} src="https://in.sugarcosmetics.com/apple-store.png" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className = {styles.div4} style={{marginLeft : "90px" , marginTop : "-5px"}}>
        <p style={{color : "white" , fontSize : "large"}}>INFORMATION</p>
        <div style={{display : "flex" , gap : "120px" , marginTop : "-10px"}}>
          <a href='https://accounts.google.com/o/oauth2/v2/auth/identifier?response_type=code&client_id=946018238758-bi6ni53dfoddlgn97pk3b8i7nphige40.apps.googleusercontent.com&redirect_uri=com.apple.mail%3A%2F&scope=profile%20email%20https%3A%2F%2Fmail.google.com%2F%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcarddav&code_challenge=jpq_MA2r8Wi3Pmj8-t8fZz6UdHVH-aDjw4IhYl0PREs&code_challenge_method=S256&flowName=GeneralOAuthFlow' target="_blank">Contact Us</a>
          <a href='https://in.sugarcosmetics.com/pages/returns-refunds' target="_blank">Returns</a>
          <a href='https://in.sugarcosmetics.com/pages/faqs' >FAQs</a>
          <a href='https://in.sugarcosmetics.com/pages/about-us' target="_blank">About Us</a>
          <a href='https://in.sugarcosmetics.com/pages/terms-conditions' target="_blank">Terms and Conditions</a>
        </div>
      </div >
      <div style={{marginLeft : "90px" , marginTop : "-5px"}}>
      <p style={{color : "white" , fontSize : "large"}}>GET IN TOUCH</p>
      </div>
        <div style={{marginLeft : "90px" , marginTop : "-5px" , display : "flex" , gap: "70px"}}>
          <div>
            <div style={{display : "flex"}}><img style={{marginTop : "20px" , width : "20px" ,height : "15px" }} src="https://in.sugarcosmetics.com/desc-images/phone_android_white.svg" alt="" /><p style={{color : "white" , fontSize : "17px" , fontWeight : "540"}}>Call us at</p></div>
            <p style={{fontSize : "17px" , color : "rgb(153,153,153)" , marginTop : "-10px"}}>1800-209-9933</p>
            <p style={{fontSize : "small" , color : "rgb(153,153,153)" , marginTop : "-15px"}}>Monday to Friday : 9 AM to 7 PM</p>
          </div>
          <div>
          <p style={{color : "white" , fontSize : "17px" , fontWeight : "540"}}>Support</p>
          <p style={{fontSize : "17px" , color : "rgb(153,153,153)" , marginTop : "-10px"}}>hello@sugarcosmetics.com</p>
          </div>
          <div>
          <p style={{color : "white" , fontSize : "17px" , fontWeight : "540"}}>Work with us</p>
          <p style={{fontSize : "17px" , color : "rgb(153,153,153)" , marginTop : "-10px"}}>careers@sugarcosmetics.com</p>
          </div>
          <div>
          <p style={{color : "white" , fontSize : "17px" , fontWeight : "540"}}>PRESS AND MEDIA</p>
          <p style={{fontSize : "17px" , color : "rgb(153,153,153)" , marginTop : "-10px"}}>pr@sugarcosmetics.com</p>
          </div>
          <div>
          <p style={{color : "white" , fontSize : "17px" , fontWeight : "540"}}>INFLUENCER COLLAB</p>
          <a href='https://blog.sugarcosmetics.com/collab' target="_blank" style={{fontSize : "17px" , color : "rgb(153,153,153)" , marginTop : "-10px" , textDecoration : "none" , paddingTop : "-20px"}}>JOIN US</a>
          </div>
        </div>
        <hr style={{marginLeft : "40px" , marginRight : "40px",marginTop : "42px"}}/>
      </div>
      
    </>
  )
}

export default Footer