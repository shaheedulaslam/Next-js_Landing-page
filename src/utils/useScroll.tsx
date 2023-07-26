import React,{useState,useEffect} from 'react'

export default function UseScroll() {
    const [scrollPosition , setScrollPosition] = useState(0)

        useEffect(() => {
            function handleScroll(){
                setScrollPosition(window.scrollY)
            }

            window.addEventListener('scroll',handleScroll)
            return ()=>{
                window.removeEventListener('scroll',handleScroll)
            }
        }, [])
  return scrollPosition
}


