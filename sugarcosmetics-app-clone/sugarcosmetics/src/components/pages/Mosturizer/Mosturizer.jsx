import React from 'react'
import styles from './Mosturizer.module.css'
function Mosturizer() {
  return (
    <div className={styles.container}>
        <div style={{display : "flex" ,gap : "950px"}}>
            <div className={styles.innerdiv1}>
                <div><img src="https://in.sugarcosmetics.com/desc-images/breadcrumb_home.svg" alt="" /></div>
                <div>/</div>
                <div>Skin care products</div>
            </div>
            <div style={{display : "flex" ,gap : "50px"}}>
                <div style={{display : "flex" ,gap : "20px"}}>
                    <div><img src="https://in.sugarcosmetics.com/desc-images/filterIcon.png" alt="" /></div>
                    <div>Filters</div>
                </div>
                <div style={{display : "flex" ,gap : "10px"}}>
                    <div><img src="https://in.sugarcosmetics.com/desc-images/sortIcon.png" alt="" /></div>
                    <div>Sort</div>
                </div>
            </div>
        </div>
        <div className={styles.innerdiv2}>
            <div>Face mosturizer</div>
            <div>-</div>
            <div>4 items</div>
        </div>
        <div className={styles.innerdiv3}>
            <div className={styles.box} style={{textAlign : "center" , backgroundColor:"white"}}>
                <div style={{marginTop : "40px"}}><img style={{height : "250px" , width : "150px"}} src="https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-bling-leader-illuminating-moisturizer-13644982681683.jpg?v=1619115847" alt="" /></div>
                <div style={{marginLeft : "30px" , marginRight : "30px" , fontSize : "small" , color :"rgb(128,128,128)" , fontWeight:"900"}}>BLING LEADER ILLUMINATING MOISTURIZER</div>
                <div style={{display:"flex" , justifyContent:"center" , marginTop:"17px"}}>
                    <div><img style={{height : "20px" , width : "20px"}} src="https://in.sugarcosmetics.com/star_filled.png" alt="" /></div>
                    <div style={{fontSize : "small"}}>4.7(141)</div>
                </div>
                <div className={styles.button}>
                    <span><i class="fa-brands fa-gratipay"></i></span>
                    <button style={{height:"30px" , width:"250px", color:"white",backgroundColor:"rgb(33,37,41)"}}>Add to cart</button>
                </div>
            </div>
            <div className={styles.box} style={{textAlign : "center" , backgroundColor:"white"}}>
                <div style={{marginTop : "40px"}}><img style={{height : "250px" , width : "150px"}} src="https://cdn.shopify.com/s/files/1/0906/2558/products/Hyderattingkit.jpg?v=1626968294" alt="" /></div>
                <div style={{marginLeft : "30px" , marginRight : "30px" , fontSize : "small" , color :"rgb(128,128,128)" , fontWeight:"900"}}>AQUAHOLIC HYDRATING STICK</div>
                <div style={{display:"flex" , justifyContent:"center" , marginTop:"17px"}}>
                    <div><img style={{height : "20px" , width : "20px"}} src="https://in.sugarcosmetics.com/star_filled.png" alt="" /></div>
                    <div style={{fontSize : "small"}}>4.7(141)</div>
                </div>
                <div className={styles.button}>
                    <span><i class="fa-brands fa-gratipay"></i></span>
                    <button style={{height:"30px" , width:"250px", color:"white",backgroundColor:"rgb(33,37,41)"}}>Add to cart</button>
                </div>
            </div>
            <div className={styles.box} style={{textAlign : "center" , backgroundColor:"white"}}>
                <div style={{marginTop : "40px"}}><img style={{height : "250px" , width : "150px"}} src="https://cdn.shopify.com/s/files/1/0906/2558/products/moisturiser.jpg?v=1626968292" alt="" /></div>
                <div style={{marginLeft : "30px" , marginRight : "30px" ,fontSize : "small" , color :"rgb(128,128,128)" , fontWeight:"900"}}>AQUAHOLIC PRIMING MOSTURIZER</div>
                <div style={{display:"flex" , justifyContent:"center" , marginTop:"17px"}}>
                    <div><img style={{height : "20px" , width : "20px"}} src="https://in.sugarcosmetics.com/star_filled.png" alt="" /></div>
                    <div style={{fontSize : "small"}}>4.7(141)</div>
                </div>
                <div className={styles.button}>
                    <span><i class="fa-brands fa-gratipay"></i></span>
                    <button style={{height:"30px" , width:"250px", color:"white",backgroundColor:"rgb(33,37,41)"}}>Add to cart</button>
                </div>
            </div>
            <div className={styles.box} style={{textAlign : "center" , backgroundColor:"white"}}>
                <div style={{marginTop : "40px"}}><img style={{height : "250px" , width : "150px"}} src="https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-citrus-got-real-daily-moisturizer-28038347292755.jpg?v=1619155748" alt="" /></div>
                <div style={{marginLeft : "30px" , marginRight : "30px" ,fontSize : "small" , color :"rgb(128,128,128)" , fontWeight:"900"}}>CITRUS GOT REAL DAILY MOSTURIZER</div>
                <div style={{display:"flex" , justifyContent:"center" , marginTop:"17px"}}>
                    <div><img style={{height : "20px" , width : "20px"}} src="https://in.sugarcosmetics.com/star_filled.png" alt="" /></div>
                    <div style={{fontSize : "small"}}>4.7(141)</div>
                </div>
                <div className={styles.button}>
                    <span><i class="fa-brands fa-gratipay"></i></span>
                    <button style={{height:"30px" , width:"250px", color:"white",backgroundColor:"rgb(33,37,41)"}}>Add to cart</button>
                </div>
            </div>
        </div>
        <div style={{marginTop : "40px",marginLeft : "120px"}}>READ MORE ABOUT Moisturizers</div>
    </div>
  )
}

export default Mosturizer