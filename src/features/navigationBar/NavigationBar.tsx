import styled from 'styled-components';
import StartButton from '../startButton/StartButton'
import StartMenu from '../startMenu/StartMenu'

const NavBar = styled.div`
position: fixed;
background-color: #c0c0c0;
bottom: 0;
width: 100vw;
height: 2.6rem;
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
`

export default function NavigationBar() {
    return (
        <NavBar>
            <StartButton/>
            <StartMenu/>
        </NavBar>
    )

}