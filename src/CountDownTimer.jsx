import React, { useEffect, useState } from 'react'

function CountDownTimer() {
    
    const [second, setSecond] = useState(0)
    const [minute, setMinute] = useState(0)
    const [hour, setHour] = useState(0)

    const [styleBtn, setStyleBtn] = useState("white")


    let [stopTime, setStopTime] = useState()

    const startTimer = () => {
        setStyleBtn("green")

        stopTime = setInterval(() => {
            setSecond(prevSec => prevSec + 1)
        }, 1000)
        setStopTime(stopTime)
    }

    const stopTimer = () => {
        setStyleBtn("red")

        clearInterval(stopTime)
        setSecond(0)
        setMinute(0)
        setHour(0)
    }

    const pauseTimer = () => {
        setStyleBtn("yellow")

        clearInterval(stopTime)
    }

    useEffect(() => {
        if (second === 60) {
            setSecond(0)
            setMinute(prevMin => prevMin + 1)
            if (minute === 60) {
                setSecond(0)
                setMinute(0)
                setHour(prevHrs => prevHrs + 1)
                if (hour === 24) {
                    setSecond(0)
                    setMinute(0)
                    setHour(0)
                }
            }
        }
    }, [second, minute, hour])


    return (
        <div>
            <h1 className="main-header">Countdown Timer</h1>
            <h2 className="timer-heading">{hour} : {minute} : {second}</h2>

            <div style={{backgroundColor: styleBtn}} className="btn-div"> 
                <button onClick={startTimer} className="btn-timer">Start</button>
                <button onClick={pauseTimer} className="btn-timer">Pause</button>
                <button onClick={stopTimer} className="btn-timer">Stop</button>
            </div>
        </div>
    )
}

export default CountDownTimer
