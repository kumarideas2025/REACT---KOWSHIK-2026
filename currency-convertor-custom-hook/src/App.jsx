import { useState } from 'react'
import { InputBox } from './component'
import UseCurrencyInfo from './hooks/use_currency'
import './App.css'

function App() {



  //states
 const[amount,setAmount]=useState(0)
 const[from,setFrom]=useState("usd")
const[to,setTo]=useState("bdt")
 const[convertedAmount,setConvertedAmount]=useState(0)



//hooks
const currencyInfo=UseCurrencyInfo(from)
const options=Object.keys(currencyInfo)//currencyInfo that return data..[cause we get all from UsecurrencyInfo] data we found in obj ..so we have to need key from here. thus how we extract keys.




// Swap [to and from ...&&...amount and convertedAmount]..................[means how to swap two variable]------------
const Swap=()=>{
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
}


// this is for to convert one currency to another[BAsically here we do multipication]
 const convert=()=>{
  setConvertedAmount(amount*currencyInfo[to]) // currencyInfo have all the value of keys... and which currency we wanna convert we find that from [to].

 }












 return (



        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/12267702/pexels-photo-12267702.jpeg')`,
            }}
        >


            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    
                  










<form

                        onSubmit={(e) => {
                            e.preventDefault(); // we know when from run it opens in some url..to stop that we use this.
                            convert()//and we set our one convert method in function ..where we do actually want to sent our from
                           
                        }}
                    >



{/* ----------------------------------------this part from box-------------------------- */}


                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOption={options}

                                // what if currency change..so we use that
                                onCurrencyChange={(currency)=>setAmount(currency)} // here we set the new amount there...when currency changes.
                             selectCurrency={from} // this decied which type of currency we want.
                            onAmountChange={(amount)=>setAmount(amount)}
                            />
                        </div>


                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white 
                                rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={Swap}
                            >
                                swap
                            </button>
                        </div>







{/* ----------------------------------------this part to box-------------------------- */}


                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                    label=" To"
                                amount={convertedAmount}
                                currencyOption={options}
                                onCurrencyChange={(currency)=>setTo(currency)} // we use SetTo to avoid looping value here. 
                             selectCurrency={to} 
                             amountDisable
                            />
                        </div>


                        <button type="submit" className="w-full bg-blue-600 
                        text-white px-4 py-3 rounded-lg">

                            Convert {from.toUpperCase()} to
                             {to.toUpperCase()}
                        </button>

 </form>



                </div>
            </div>
        </div>
   
  
  );


}

export default App
