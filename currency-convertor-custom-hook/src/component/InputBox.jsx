import React,{useId} from 'react'


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption=[], // might contains many currency list...so use here an empty array.
    selectCurrency="usd",
    amountDisable=false,// so user can give value or not
    currencyDisable=false,// same
    className = "",
}) {

   // from react official ---->Do not call useId to generate keys in a list. Keys should be generated from your data.
    const amountInputId=useId()// give unique values.




    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            
            
            
            <div className="w-1/2">
                <label htmlFor={amountInputId} //that will give uniqueness.
                className="text-black/40 mb-2 inline-block">
                    {label}
                </label>


                <input
                    id={amountInputId} // binding label with input.
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=>onAmountChange &&
                    onAmountChange(Number(e.target.value))}// when amount change we use that ..so all know from component.1st one check as it changes or not and after && it executed that. we use number so that that the given string convert into it.
                />
            </div>






            
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)} // we did not use number converter here cause here we expect string in that portion.
                      disabled={currencyDisable}
                
                >
                    



                      {currencyOption.map((currency)=>(
                        //for better performence and repeatation of values in loop ..... we have to pass keys
                            <option   key={currency}  value={currency}> 
                            {currency}
                         </option>
                      ))}
                        
                


                </select>
            </div>
        </div>
    );
}


export default InputBox;
