import React from 'react'

function Card({channel,TryObj,ArrayTime,btnText}) {
    //  { channel, TryObj } ----> (JS destructuring)..which  makes direct values from props obj.
    console.log("props received",{channel,TryObj,ArrayTime,btnText});
    
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div
        className="flex flex-col rounded-xl p-4 border border-white/20 backdrop-blur-md bg-white/10"
      >
        <img
          src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
          alt="nft-gif"
          width="350"
          height="350"
          className="rounded-xl"
        />

        <div className="flex flex-col rounded-b-xl py-4 text-gray-100">
          <div className="flex justify-between font-bold">
            <h1 className='bg-yellow-5 text-red-50 pt-2'>{channel}</h1>
            <h1>Be lazy if you wanna learn coding</h1>
          </div>

          <div className="flex justify-between font-mono text-sm">
            <p>gazipur,dhaka,bangladesh</p>
            <p>{btnText}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
