import React,{useEffect, useState} from 'react'


const Timer = () => {
    const [isTimer, setIsTimer] = useState(false);
    const  [time, setTime] = useState(60);
    const [showAlert, setShowAlert] = useState(false);
    
 
    useEffect(()=>{
        let intervalId;
      if(isTimer){
        intervalId = setInterval(()=>{
            setTime(prev=> prev  - 1)
           }, 1000)
      }
      return ()=> clearInterval(intervalId);
    }, [isTimer])
    
     useEffect(() => {
        if (time === 10 || time < 1) {
            setShowAlert(true);
        }
        if (time === 0) {
            setShowAlert(true);
            setIsTimer(false); 
        }
    }, [time]);
    
    const startTimer =()=>{
        if(!isTimer){
        setIsTimer(true);
        setTime(60);
        setShowAlert(false);
       }
    };
    const pauseTimer = ()=>{
        setIsTimer(false);
         
    }
    const formateTimer = (seconds)=>{
        const min= Math.floor( seconds/60);
        const sec =  seconds%60 <10?`0${seconds%60}`:seconds%60;
        return  `${min}:${sec}`
    }
  return (
    <div>
        
            <div className='timecontainer'><h2>{formateTimer(time)}</h2></div>
        
        <div className='buttons-container'>
            <button onClick={startTimer } disabled={isTimer} className='buttons'>Start</button>
            <button onClick={pauseTimer} disabled={!isTimer} className='buttons'>Pause</button>
        </div>
        {showAlert && (
                <div className="alert">
                    {(time === 10 || time > 0 )? (
                        <p>Remaining time is only {formateTimer(time)} seconds</p>
                    ) : (
                        <p>Game Over</p>
                        
                    )}
                </div>
            )}
    </div>
  )
}

export default Timer