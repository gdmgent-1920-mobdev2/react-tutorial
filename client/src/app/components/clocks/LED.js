import React from 'react';
import classnames from 'classnames';

const LED = ({isOn = false}) => {
    return (
        <div className={classnames('led', (isOn) ? 'led--ison' : 'led--isoff')}></div>
    );
};

export default LED;