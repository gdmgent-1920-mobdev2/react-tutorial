import React, { useEffect, useState } from 'react';

const DigitalClock = () => {
    const [time, setTime] = useState(new Date().getTime());
    const [readableTime, setReadableTime] = useState(null);

    useEffect(() => {
        async function getTime () {
            setTime(new Date().getTime());
        }

        setReadableTime(convertTimeToReadableDateString(time));

        const timerId = setInterval(() => getTime(), 500);
        return () => clearInterval(timerId);
    }, [time]);

    const convertTimeToReadableDateString = (t) => {
        const date = new Date();
        const h = date.getHours();
        const m = date.getMinutes();
        const s = date.getSeconds();
        return `${toBits(h, 2)}:${toBits(m, 2)}:${toBits(s, 2)}`;
    };

    const toBits = (input, n) => {
        input = String(input);
        while(input.length < n) {
            input = `0${input}`;
        }
        return input;
    };

    return (
        <div>
            <p>{time}</p>
            {!!readableTime ?
                <p>{readableTime}</p> :
                <p>De tijd staat stil</p>
            }
        </div>
    );
};

export default DigitalClock;