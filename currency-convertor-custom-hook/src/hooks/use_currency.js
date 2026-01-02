import { useEffect,useState } from "react"


// from app.jsx we find currency=" "
function UseCurrencyInfo(currency){
    const[data,setData]=useState({})
 useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((res)=>res.json())
    .then((res)=>setData(res[currency]))
    console.log(data);
    
 },[currency])
 console.log(data);
 return data
}

export default UseCurrencyInfo;


















//----------------------------------------understand with diagram----------------
// ┌─────────────────────────┐
// │        App.jsx          │  <-- Component
// │-------------------------│
// │ Calls: useCurrencyInfo("usd")   <-- "usd" argument
// └─────────────┬───────────┘
//               │
//               ▼
// ┌─────────────────────────┐
// │  useCurrencyInfo(currency) │ <-- Custom Hook
// │-------------------------│
// │ Parameter: currency = "usd"  <-- receives value
// │ useState: data = {}          <-- initial state
// └─────────────┬───────────┘
//               │
//               ▼
// ┌─────────────────────────┐
// │      useEffect()        │
// │-------------------------│
// │ Runs on mount / currency change
// │ Fetch URL:
// │ https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json
// └─────────────┬───────────┘
//               │
//               ▼
// ┌─────────────────────────┐
// │        Fetch API        │
// │-------------------------│
// │ GET usd.json from CDN
// │ Response (JSON):
// │ {
// │   "date":"2026-01-01",
// │   "usd": { bdt:110.25, eur:0.92, inr:83.1 }
// │ }
// └─────────────┬───────────┘
//               │
//               ▼
// ┌─────────────────────────┐
// │   res[currency] access  │
// │-------------------------│
// │ res["usd"] → {bdt:110.25,...}
// └─────────────┬───────────┘
//               │
//               ▼
// ┌─────────────────────────┐
// │      setData(...)       │  <-- State updater
// │-------------------------│
// │ React stores:
// │ data = {bdt:110.25, eur:0.92, inr:83.1}
// │ Marks component as dirty
// │ Schedules re-render
// └─────────────┬───────────┘
//               │
//               ▼
// ┌─────────────────────────┐
// │  Hook returns data      │
// │-------------------------│
// │ return data
// │ currencyData = {bdt:110.25,...}
// └─────────────┬───────────┘
//               │
//               ▼
// ┌─────────────────────────┐
// │      App.jsx re-render  │
// │-------------------------│
// │ Now can use:
// │ currencyData.bdt → 110.25
// │ Render in JSX:
// │ <h1>1 USD = {currencyData.bdt} BDT</h1>
// └─────────────────────────┘
