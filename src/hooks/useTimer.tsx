import { useEffect } from 'react'

export default function useTimer({ timeInMs, begin = false }: { timeInMs: number, begin: boolean }) {
    // get the time in ms 
    // return the formatted time
    // when begin is true, start countdown and return new formatted time every second
    useEffect(() => {
        const formattedTime = getFormattedTime(timeInMs)
    }, [])

    return
}

const DIVISIONS: { amount: number, name: "hour" | "minute" | "second" }[] = [
    { name: 'hour', amount: 3600 },
    { name: 'minute', amount: 60 },
    { name: 'second', amount: 1 },
]

function getFormattedTime(time: number) {
    time /= 1000
    const formattedTime = {
        hour: 0,
        minute: 0,
        second: 0,
    }
    for (let { name, amount } of DIVISIONS) {
        while (time >= amount) {
            formattedTime[name] += 1
            time -= amount
        }
    }
    return formattedTime
}