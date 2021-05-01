import styled from 'styled-components';
import Draggable from 'react-draggable';
import {isMobile} from 'react-device-detect';

interface WindowBodyWrapperProps {
    zIndex: number
}

const WindowBodyWrapper = styled.div`
    width: ${() => isMobile ? 'auto' : 'fit-content'};
    max-width: ${() => isMobile ? '90vw' : ''};
    height: 30rem;
    background-color: #bfc6c8;
    border-radius: 1px;
    border-top: 2px solid #fcfcfc;
    border-left: 2px solid #fcfcfc;
    border-right: 2px solid #0f2022;
    border-bottom: 2px solid #0f2022;
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: ${(props: WindowBodyWrapperProps) => props.zIndex.toString()}
`

export interface WindowProps  { 
    children: React.ReactNode
    onClick: () => void
    pageZIndex: number
 }

export default function WindowBody(props: WindowProps) {

    return(
        <Draggable bounds={isMobile ? 'body' : ''} onMouseDown={() => props.onClick()} cancel=".not-draggable" handle=".draggable-custom" defaultPosition={isMobile ?{x: 0, y: Math.floor(Math.random() * 101)} : {x: 230, y: 100}}>
            <WindowBodyWrapper zIndex={props.pageZIndex}>
                {props.children}
            </WindowBodyWrapper>
        </Draggable>
    )
}