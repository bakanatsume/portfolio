'use client'

import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

export default function customCursor() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const followerRef =  useRef<HTMLDivElement>(null)

   
    useEffect(()=>{
        gsap.set(cursorRef.current, {
            xPercent: 100,
            yPercent: 100
        });
        gsap.set(followerRef.current, {
            xPercent: -10,
            yPercent: -10
        });

        const moveCursor = (event : any) => {
            gsap.to(cursorRef.current, {
                x: event.clientX,
                y: event.clientY,
                duration: 0.3
            });
            gsap.to(followerRef.current, {
                x: event.clientX,
                y: event.clientY,
                delay: 0.1,
                duration: 0.3
            });
        };

        window.addEventListener("mousemove", moveCursor);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    },[])
  return (
    <div>
      <div ref={cursorRef} className='cursor'></div>
      <div ref={followerRef} className='follower-cursor'></div>
    </div>
  )
}
