import styled from 'styled-components';
import StartButton from '../startButton/StartButton'
import StartMenu from '../startMenu/StartMenu'
import OpenedWindows from '../openedWindows/OpenedWindows'
import Clock from '../clock/Clock'
import { useAppSelector } from '../../../app/hooks';
import { selectIsClicked } from '../startButton/startButtonSlice';
import React, { useRef } from "react";

const NavBar = styled.div`
position: fixed;
background-color: #bfbfbf;
bottom: 0;
width: 100vw;
height: 2.5rem;
border-style: solid;
border-bottom: none;
border-left: none;
border-right: none;
border-width: 2px;
border-color: rgb(254, 254, 254) rgb(10, 10, 10) rgb(10, 10, 10) rgb(254, 254, 254);
box-shadow: rgb(223 223 223) 0px 1px 0px 1px inset;
box-sizing: border-box;
display: flex;
align-items: center;
padding-right:4px;
`

export default function NavigationBar() {
    const isStartButtonClicked = useAppSelector(selectIsClicked) 
    const buttonRef = useRef(null)

    return (
        <NavBar>
            <StartButton startButtonRef={buttonRef}/>
            { isStartButtonClicked ? <StartMenu startButtonRef={buttonRef} /> : ''}
            <OpenedWindows></OpenedWindows>
            <Clock/>
        </NavBar>
    )

}