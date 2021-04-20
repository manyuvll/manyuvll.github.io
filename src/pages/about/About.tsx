import styled from 'styled-components';
import WindowHeader from '../../features/windowHeader/WindowHeader'
import WindowOptionsBar from '../../features/windowOptionsBar/WindowOptionsBar'
import WindowBody from '../../features/windowBody/WindowBody'
import WindowFooter from '../../features/windowFooter/WindowFooter'

const AboutWrapper = styled.div`
color: rgb(255, 255, 255);
    display: flex;
    margin: 3px;
    flex-flow: row wrap;
    height: 96%;
    border-width: 2px;
    border-bottom: 1px solid white;
    border-right: 1px solid white;
    border-top: 2px solid #242425;
    border-left: 2px solid #242425;
    box-sizing: border-box;
    box-shadow: inset -2px -2px 0.4px -1px #cbcfcf;
    background-color: white;
`


export default function About() {
    
    return(
        <WindowBody>
            <WindowHeader title="AboutMe.txt" />
            <WindowOptionsBar/>
            <AboutWrapper/>
            <WindowFooter/>
        </WindowBody>
    )
}