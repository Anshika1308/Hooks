import React, { useState } from 'react';

const DigitalC =() =>{
    let time= new Date().toLocaleDateString();

    const [ctime, setCtime]= useState(time);

    const updateTime =() => {
        time= new Date().toLocaleTimeString();
        setCtime(time);
    
    };
    setInterval(updateTime, 1000);


return(
    <>
    <h1> {ctime}</h1>
    
    </>
);
};


export default  DigitalC;