import styled from 'styled-components';
import startLogo from '../../assets/icons/start-logo.svg'
import { useAppSelector, useAppDispatch } from '../../app/hooks';

import {
    click,
    selectIsClicked,
    StartButtonState
  } from './startButtonSlice';


const StartBtn = styled.div`
        width: 6rem;
        height: 1.6rem;
        display: flex;
        align-items: center;
        left:0;
        position: relative;
        border-radius: 1px;
        border-top: 2px solid #f9f9f9;
        border-left: 2px solid #f9f9f9;
        border-right: 2px solid #20262b;
        border-bottom: 2px solid #20262b;
        margin-left: 0.2rem;
        justify-content: space-around;
        ${(props: StartButtonState) => (props.isClicked ? 
            `
                border-bottom: 2px solid #f9f9f9;
                border-right: 2px solid #f9f9f9;
                border-top: 2px solid #20262b;
                border-left: 2px solid #20262b;
                &:before {
                    border: 2px dotted rgb(0, 0, 0);
                    width: 5.4rem;
                    height: 1.2rem;
                    position: absolute;
                    margin-top: 0px;
                    margin-left: 0px;
                    content: "";
                    border-radius: 1px;
                }
                
            `
        : '')
        }
    `

    const LogoImg = styled.img`
        width: 1.8rem;
        height: 1.8rem;
        background: transparent!important;
        transform: rotate(-20deg);
    `

    const StartBtnText = styled.span`
        font-family: win_custom;
        font-size: 1.3rem;
    `

interface StartButtonProps {
    startButtonRef: React.RefObject<HTMLDivElement>
}

export default function StartButton({ startButtonRef }: StartButtonProps) {
    const isClicked = useAppSelector(selectIsClicked)
    const dispatch = useAppDispatch()

    return (
        <StartBtn ref={startButtonRef} isClicked={isClicked} onClick={() => dispatch(click())}>
            <LogoImg src={startLogo}></LogoImg>
            <StartBtnText>Start</StartBtnText>
        </StartBtn>
    )
}