import styled from 'styled-components';
import Draggable from 'react-draggable';

const WindowBodyWrapper = styled.div`
    width: 50rem;
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
`

export interface WindowProps  { 
    children: React.ReactNode
 }

export default function WindowBody(props: WindowProps) {
    return(
        <Draggable handle=".draggable-custom" defaultPosition={{x: 230, y: 100}}>
            <WindowBodyWrapper>
                {props.children}
            </WindowBodyWrapper>
        </Draggable>
    )
}