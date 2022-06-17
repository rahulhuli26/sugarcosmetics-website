import React from 'react'
import "./offers.scss"
import photo from "./SevenImage.json"

export  const   MyOffer=()=> {
  return (

    <>

    <div className="upperline">
        <p className='head'>General Offers </p>
    </div>
    <div>

        <div className='main'>
           
           {
             photo && photo.map(item=>{
               return(
                 <div className='imgBox' key={item.index}>

                   <img src={item.img} alt="" />
                 </div>
               )
             })
           }

           
        </div>


    </div>
    </>
  )
}
