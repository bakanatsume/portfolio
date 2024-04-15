import React from 'react'
import RotatedText from './rotatedtext'

export default function RotatingText() {
  return (
    <div className='hidden md:block flex justify-center items-center h-96'>

    <div className='flex relative  w-[400px] h-[400px] bg-gray-100 rounded-full justify-center items-center' style={{backgroundImage: "url('./doo.gif')", backgroundSize: "cover",backgroundPosition: 'center'}}>
        <div className='absolute w-[400px] h-[400px] rounded-full'>
            <div className='absolute w-full h-full' style={{animation:"rotateText 20s linear infinite"}}>
                <RotatedText text="Creative UI/UX Designer- Frontend Developer"/>
            </div>
        </div>
      
    </div>
    </div>
  )
}

{/* <script>
    const text = document.querySelector('.text p');
    text.innerHTML = text.innerHTML.split("").map(
        (char, i)=> `<span style=`transform:rotate(${i * 5}deg)`>${char}</span>`
    ).join("")
</script> */}