/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React , { useRef, useState}from "react";
import Card from "./Card";


function Foreground() {

   const ref = useRef(null);
   const data = [
    {
      desc: "Hey!! Be safe and be aware !!",
      filesize: ".9mb",
      close: true,
      tag:{ isOpen: false, tagTitle:"Download Now", tagColor:"green"},
      
    },
    {
      desc: "Hey!! Be safe and be aware !!",
      filesize: ".9mb",
      close: true,
      tag:{ isOpen: true, tagTitle:"Download Now", tagColor:"blue"},
      
    },
    {
      desc: "Hey!! Be safe and be aware !!",
      filesize: ".9mb",
      close: true,
      tag:{ isOpen: true, tagTitle:"Upload Now", tagColor:"green"},
      
    },
   ];

  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
      {data.map((item, index)=>(
           <Card data ={item} reference={ref} />
        
      ))}
   
    </div>
    
  );
}

export default Foreground;