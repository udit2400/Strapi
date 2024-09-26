'use client'

import React, { useEffect, useState } from 'react'

const page = () => {
  
  const [data,setData]=useState([]);
  const [item,setItem]=useState({
    Title:'Industry Experts',
    Description:'Industry exports refer to goods and services that are produced in one country and sold to other countries.',
    
  });
  const [select, setSelect] = useState(1);
  

  useEffect(()=>{
    const fetchData=async()=>{
      try {
        const response=await fetch('https://bright-ants-d6d02dc50f.strapiapp.com/api/dummies?populate=*');
        const result=await response.json();
        console.log('result', result);
        setData(result.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  },[])

  const handleClick=(id)=>{
      const item=data.find(item=>item.id===id);
      setItem(item.attributes);
      setSelect(id);
      console.log('clicked- ', item.attributes);
  }

  return (
    <div className='flex w-[100vw] h-[100vh] flex-col items-center gap-5 mt-5 text-2xl '>
      <h1>WHY CHOOSE US</h1> 
      <h1 className='font-bold'>We Are Different From Others</h1>   
      <h1 className='mx-32 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, perferendis obcaecati. Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, eum?</h1>  
      <div className='flex mt-6 '>
        <div className='relative flex h-[55vh] w-[40vw]'>
            <div className='absolute h-full flex flex-col w-[25vw] z-10 rounded-full text-white bg-red-600 bg-opacity-70 justify-center text-lg gap-6 px-10'>
              <h1 className='font-semibold'>{item.Title}</h1>
              <p>{item.Description}</p>
            </div>
            <div className='absolute h-full right-0 flex w-[25vw] rounded-full text-white justify-center text-lg'>
              <img className='w-full h-full rounded-full object-cover' src={item.Image? `http://localhost:1337${item.Image.data.attributes.url}`:'https://media.istockphoto.com/id/613241758/photo/young-woman-working-on-a-laptop.jpg?s=612x612&w=0&k=20&c=B3WbJ7VFEr77G0T698I0WMkM5LOV-pMrLCljEEJGh-o='} alt="" />
            </div>
        </div>
        <div className='h-[55vh] w-[40vw]'>
          <div className='flex flex-col items-end mr-10 text-lg font-semibold '>
            {
             data && data.map((item) =>{
                return (
                  <div key={item.id} onClick={()=>{handleClick(item.id)}} className={`flex my-3 rounded-l-3xl justify-between pl-5  w-96 py-2 pr-5 ${select==item.id?'bg-red-500 text-white':'bg-slate-200'} `}>
                    <h1>&lt;</h1>
                    <h1>{item.attributes.Title}</h1>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
