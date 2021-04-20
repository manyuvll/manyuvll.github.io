import styled from 'styled-components';
import WindowHeader from '../../features/windowHeader/WindowHeader'
import WindowBody from '../../features/windowBody/WindowBody'
import WindowFooter from '../../features/windowFooter/WindowFooter'

const AboutWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: white;
    box-sizing: border-box;
    margin-top: 20px;
    flex-flow: row wrap;
    margin-top: 20px;
`


export default function About() {
    
    return(
        <WindowBody>
            <WindowHeader title="About Me" />
                <AboutWrapper></AboutWrapper>
            <WindowFooter></WindowFooter>
        </WindowBody>
    )
}