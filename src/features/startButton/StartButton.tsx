import styled from 'styled-components';
import startLogo from '../../assets/icons/start-logo.svg'

const StartBtn = styled.div`
        width: 6rem;
        height: 2rem;
        display: flex;
        align-items: center;
        left:0;
        position: relative;
        border-top: 2px solid #f9f9f9;
        border-left: 2px solid #f9f9f9;
        border-right: 2px solid #0d0d0d;
        border-bottom: 2px solid #0d0d0d;
        margin-top: 0.1rem!important;
        margin-left: 0.2rem;
        justify-content: space-around;
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

export default function StartButton() {
    return (
        <StartBtn>
            <LogoImg src={startLogo}></LogoImg>
            <StartBtnText>Start</StartBtnText>
        </StartBtn>
    )
}