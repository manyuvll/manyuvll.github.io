import styled from 'styled-components'

const OpenedWindowsWrapper = styled.div`
    width: 55%;
    height: 1.8rem;
    margin-left: 10px;
    position: relative;
    display: flex;
    flex-direction: row;
`
const OpenedWindowsItem = styled.div`
    width: 20%;
    height: auto;
    background-image: linear-gradient(45deg, white 25%, transparent 25%), linear-gradient(-45deg, white 25%, transparent 25%), linear-gradient(45deg, transparent 75%, white 75%), linear-gradient(-45deg, transparent 75%, white 75%);
    background-size: 1px 1px;
    background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
    margin-left: 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-bottom: 2px solid #f9f9f9;
    border-right: 2px solid #f9f9f9;
    border-top: 2px solid #20262b;
    border-left: 2px solid #20262b;
    display: flex;
    align-items: center;
    justify-content: center;
`


export default function OpenedWindows() {
    return (
    <OpenedWindowsWrapper>
        <OpenedWindowsItem>
            Item1
        </OpenedWindowsItem>
        <OpenedWindowsItem>
            Item2edededed
        </OpenedWindowsItem>
        <OpenedWindowsItem>
            Item1
        </OpenedWindowsItem>
        <OpenedWindowsItem>
            Item2
        </OpenedWindowsItem>
    </OpenedWindowsWrapper>
    )
}