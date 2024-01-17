import { useEffect,useState } from "react";

function useCurrencyInfo(currency) {
    const [data,setData]=useState({})
// want to call API so to call hooks,so which hook to use when invoke mount /unmount or lifecycle is trigger--useEffect
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        console.log(data);
    },[currency])
    console.log(data);
    return data
}
export default useCurrencyInfo;