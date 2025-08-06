import { useEffect, useState } from "react";

interface TimerData {
    initialTimerValueSeconds: number;
}

const Timer: React.FC<TimerData> = ({initialTimerValueSeconds}) => {
    const [currentTime, setCurrentTime] = useState(initialTimerValueSeconds);

    useEffect(() => {
        if (currentTime === 0)
            return;

        //change the time every second
        const timer = setInterval(() => {
            setCurrentTime(currentTime - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [currentTime]);

    const secondsInOneDay = 86400;
    if (currentTime / secondsInOneDay >= 1)
    {
        const days = Math.floor(currentTime / secondsInOneDay)
        const hours = Math.floor((currentTime - (days * secondsInOneDay)) / 3600);
        const minutes = Math.floor((currentTime - (days * secondsInOneDay + hours * 3600)) / 60);
        const seconds = currentTime % 60;

        return <p className="timer">{days}d {hours}h {minutes}m {seconds}s</p>;
    }

    const hours = Math.floor(currentTime / 3600);
    const minutes = Math.floor((currentTime - (hours * 3600)) / 60);
    const seconds = currentTime % 60;

    return <p className="timer">{hours}h {minutes}m {seconds}s</p>;
}

export default Timer;