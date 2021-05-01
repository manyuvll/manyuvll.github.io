import styled from 'styled-components';
import Draggable from 'react-draggable';

interface WindowBodyWrapperProps {
    zIndex: number
}

const WindowBodyWrapper = styled.div`
    width: fit-content;
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
        <Draggable onMouseDown={() => props.onClick()} handle=".draggable-custom" defaultPosition={{x: 230, y: 100}}>
            <WindowBodyWrapper zIndex={props.pageZIndex}>
                {props.children}
            </WindowBodyWrapper>
        </Draggable>
    )
}