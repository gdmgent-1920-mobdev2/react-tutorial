import React, { useEffect, useState} from 'react';
import LED from './LED';

const LEDStrip = ({v = 0, amount = 1}) => {
    const [binaryValue, setBinaryValue] = useState(null);
    const leds = [];
    for (let i = 0; i < amount ; i++) {
        leds.push(<LED key={i} isOn={binaryValue !== null ? (binaryValue[i] === '1' ? true : false) : false} />);
    }

    useEffect(() => {
        const bStr = Number(v).toString(2);
        setBinaryValue(toBits(bStr, amount));
    }, [v, amount]);

    const toBits = (input, n) => {
        input = String(input);
        while(input.length < n) {
            input = `0${input}`;
        }
        return input;
    };

    return (
        <div className="led-strip">
            {leds}
        </div>
    );
};

export default LEDStrip;