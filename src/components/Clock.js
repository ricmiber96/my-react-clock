import React,{useEffect, useState} from 'react'



export default function Clock(){

    const [time, setTime] = useState(0)

    useEffect(() => {
       setInterval(()=>setTime(new Date()),1000)
    }, [])

    return(
        <div className="clock">
            <div className="timer">
                {time.toLocaleTimeString()}
            </div>
        </div>
    )


}