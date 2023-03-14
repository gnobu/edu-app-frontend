import { useEffect, useState } from 'react'

export default function useTimer({ timeInMs, setFinished, begin = false }: {
    timeInMs: number,
    setFinished: React.Dispatch<React.SetStateAction<boolean>>,
    begin?: boolean
}) {
    // get the time in ms
    const [timer, setTimer] = useState(timeInMs)
    useEffect(() => {
        // when begin is true, start countdown 
        if (begin) {
            const interval = setInterval(() => {
                setTimer(prev => {
                    // if timeup, stop timer and end test
                    if (prev - 1000 <= 0) {
                        clearInterval(interval)
                        setFinished(true)
                    }
                    return (prev - 1000)
                })
            }, 1000);
        }
    }, [begin])

    const [formattedTime, setFormattedTime] = useState(getFormattedTime(timer))
    useEffect(() => {
        // compute new formatted time every second
        setFormattedTime(prev => getFormattedTime(timer))
        // console.log(formattedTime)
    }, [timer])

    // return the formatted time
    return { formattedTime }
}

function getFormattedTime(time: number) {
    return new Date(time).toISOString().substring(11, 19)
}