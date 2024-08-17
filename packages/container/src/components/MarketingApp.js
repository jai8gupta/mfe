import { mount } from "marketing/MarketingApp";
import React, { useEffect, useRef } from "react";

export default () => {
    const ref = useRef(null);
    useEffect(()=>{
        if(ref.current != null){
            mount(ref.current);
        }
    },[])

    return <div ref={ref}></div>
}