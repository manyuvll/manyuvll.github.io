import styled from 'styled-components';
import WindowHeader from '../../features/window/windowHeader/WindowHeader'
import WindowOptionsBar from '../../features/window/windowOptionsBar/WindowOptionsBar'
import WindowBody from '../../features/window/windowBody/WindowBody'
import WindowFooter from '../../features/window/windowFooter/WindowFooter'
import Typewriter from 'react-simple-typewriter'
import 'react-simple-typewriter/dist/index.css'
import AvatarImg from '../../assets/picture/avatar.png'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ABOUT } from '../pagesTypes'
import { closePage, minimizePage, focusPage, selectAboutPageZIndex } from '../pagesSlicer';
import {isMobile} from 'react-device-detect';




const AboutWrapper = styled.div`
color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    margin: 3px;
    height: 96%;
    width: ${() => isMobile ? 'fit-content' : '50rem'};;
    overflow: scroll;
    border-width: 2px;
    border-bottom: 1px solid white;
    border-right: 1px solid white;
    border-top: 2px solid #242425;
    border-left: 2px solid #242425;
    box-sizing: border-box;
    box-shadow: inset -2px -2px 0.4px -1px #cbcfcf;
    background-color: white;
`

const AboutTextTitle = styled.span`
    text-align: center;
    margin-top: 20px;
    margin-left: 8px;
    color: black;
    font-size: 2rem;
    font-family: w95fa;
    width: 100%;
    height: fit-content;
`

const AboutTextTitleJob = styled.span`
    text-align: center;
    margin-top: 6px;
    color: red;
    font-family: w95fa;
    width: 100%;
    height: fit-content;
`

const AboutText = styled.span`
    margin-top: 10px;
    
    color: black;
    line-height: 1.5rem;
    font-family: w95fa;
    width: 100%;
    height: fit-content;
    margin-left: 5rem;
`
const Separator = styled.div`
    width: 100%;
    height: 1rem;
`

const Row = styled.div`
    display: flex;
    flex-direction: ${() => isMobile ? 'column' : 'row'};
    width: 100%;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`

const Avatar = styled.img`
    width: 17rem;
    height: auto;
`

interface AboutProps {
    customClass: string
}

export default function About(props: AboutProps) {
    const dispatch = useAppDispatch()

    return(
        <WindowBody customClass={props.customClass} pageZIndex={useAppSelector(selectAboutPageZIndex) || 1} onClick={() => dispatch(focusPage(ABOUT.title))}>
            <WindowHeader title={ABOUT.title} icon={ABOUT.icon} onClickClose={() => dispatch(closePage(ABOUT.title))} onClickMinimize={() => dispatch(minimizePage(ABOUT.title))} />
            <WindowOptionsBar/>
            <AboutWrapper>
                <AboutTextTitle>
                    Hi there, I'm Emanuele and I'm a &nbsp;
                    <AboutTextTitleJob>
                        <Typewriter
                            loop
                            cursor
                            words={
                                [
                                    `Front-End Engineer.`, `Back-End Engineer.`, `iOS Engineer.`
                                ]
                            }
                        />  
                    </AboutTextTitleJob>            
                </AboutTextTitle>
                <Separator/>
                <Row>
                    <Column>
                        <AboutText>
                            I'm a software engineer that loves creating new user experiences through creative design.
                            On my free time I enjoy reading and experimenting with new tech trends.
                            <br/>
                            <br/>
                            After my 2 years full-stack engineer experience in France, I decided to move to Tokyo. <br/> While enjoying my new life here I'm also looking for the perfect fitting job that will let me express my potential.
                            <br/>
                            <br/>
                            I love working on web or mobile apps and strive to make every project I work on a success and enjoyed by the user.
                        </AboutText>
                    </Column>
                    <Column>
                        <Avatar src={AvatarImg}/>
                    </Column>
                </Row>
                
            </AboutWrapper>
            <WindowFooter/>
        </WindowBody>
    )
}