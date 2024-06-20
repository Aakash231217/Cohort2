import { useEffect, useRef, useState } from "react";

function App(){
    const [incomeTax,setIncomeTax] = useState(2000);
    const divRef = useRef();

    useEffect(()=>{
        setTimeout(()=>{
            console.lof(divRef.current);
            divRef.current.innerHTML = 10;

        },5000)
           
        },[])
return (
    <>
    hi there, your income tax is <div ref={divRef}>{}</div>
    </>
)
}
    
export default useRef;