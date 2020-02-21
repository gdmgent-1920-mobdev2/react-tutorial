import React, { useEffect, useState } from 'react';

import LEDStrip from './LEDStrip';

import './BinaryClock.css';

const BinaryClock = () => {
    const [time, setTime] = useState(new Date().getTime());
    const [readableTime, setReadableTime] = useState('00:00:00');

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
        <div className="binary-clock">
            <LEDStrip v={readableTime.split(':')[0][0]} amount={2} />
            <LEDStrip v={readableTime.split(':')[0][1]} amount={4} />
            <LEDStrip v={readableTime.split(':')[1][0]} amount={3} />
            <LEDStrip v={readableTime.split(':')[1][1]} amount={4} />
            <LEDStrip v={readableTime.split(':')[2][0]} amount={3} />
            <LEDStrip v={readableTime.split(':')[2][1]} amount={4} />
        </div>
    );
};

export default BinaryClock;