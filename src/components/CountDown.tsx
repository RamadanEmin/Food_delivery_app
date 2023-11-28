'use client';

import Countdown from 'react-countdown';

const endingDate = new Date('2024-01-01');

const CountDown = () => {
    return (
        <Countdown date={endingDate} className='text-yellow-300 font-bold text-5xl'/>
    );
};

export default CountDown;