import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { closePage, minimizePage, focusPage, selectContactMePageZIndex } from '../pagesSlicer'
import { CONTACTME } from '../pagesTypes'
import WindowHeader from '../../features/window/windowHeader/WindowHeader'
import WindowOptionsBar from '../../features/window/windowOptionsBar/WindowOptionsBar'
import WindowBody from '../../features/window/windowBody/WindowBody'
import WindowFooter from '../../features/window/windowFooter/WindowFooter'
import styled from 'styled-components'
import ContactMeItems from './contactMeItems'
import {isMobile} from 'react-device-detect';

const ContactMeWrapper = styled.div`
    color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    margin: 3px;
    height: 96%;
    width: ${isMobile ? 'auto' : 'fit-content'};;
    min-width: ${isMobile ? '' : '30.5rem'};
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

interface ContactMeProps {
    customClass: string
}

export default function ContactMe(props: ContactMeProps) {
    const dispatch = useAppDispatch()
    return(
        <WindowBody customClass={props.customClass} pageZIndex={useAppSelector(selectContactMePageZIndex) || 1} onClick={() => dispatch(focusPage(CONTACTME.title))}>
            <WindowHeader title={CONTACTME.title} icon={CONTACTME.icon} onClickClose={() => dispatch(closePage(CONTACTME.title))} onClickMinimize={() => dispatch(minimizePage(CONTACTME.title))} />
            <WindowOptionsBar/>
            <ContactMeWrapper>
                <ContactMeItems></ContactMeItems>
            </ContactMeWrapper>
            <WindowFooter/>
        </WindowBody>
    )
} 