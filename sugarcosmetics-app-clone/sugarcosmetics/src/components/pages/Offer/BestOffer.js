import React from 'react'
import checkoffer from "./OfferData.json"
import "./offers.scss"


export default function BestOffer() {
  return (
      <>
    <div>
        Best Offers
    </div>

    <div className='getOffers'>

        {
            checkoffer && checkoffer.map(record=>{
                return (
                    <div className='box' key={record.amount}>
                            <img className='tag' src={record.tag} alt="" />
                            <br />
                            <img className='myImage' src={record.image} alt="" />
                            <p>{record.name}</p>
                            <p> Rs. {record.price}</p>
                            <p>{Math.floor(record.raing)}</p>

                    </div>
                )
            })
        }
    </div>



      </>
  )
}
