import styled from 'styled-components';
import clockIcon from '../../assets/icons/loudspeaker_rays-0.png'
import React, { useState, useEffect } from 'react';
import { timeFormatter } from '../../helpers/time'

const ClockWrapper = styled.div`
    border-bottom: 1px solid #f9f9f9;
    border-right: 1px solid #f9f9f9;
    border-top: 1px solid #878787;
    border-left: 1px solid #878787;
    width: 4.8rem;
    height: 1.6rem;
    display: flex;
    margin-left: auto;
    align-items: center;
    padding-right: 10px;
`
const ClockImg = styled.img`
    width: 1.2rem;
    height: 1.2rem;
    background: transparent!important;
    margin-left: 3px;
`

const ClockText = styled.div`
    position: relative;
    font-family: 'win95_light';
    font-size: 0.65rem;
    margin-left: auto;
`


export default function Clock() {
    const [time, setTime] = useState(timeFormatter(new Date()));
    useEffect(() => {
        let d = new Date();
        const intervalID = setInterval(() => {
          setTime(timeFormatter(d));
        }, 1000);
    
        return () => {
          clearInterval(intervalID);
        };
      }, [time]);

    

    return(
        <ClockWrapper>
            <ClockImg src={clockIcon}/>
            <ClockText>{time.hours}:{time.minutes}:{time.seconds}</ClockText>
        </ClockWrapper>
    )
}