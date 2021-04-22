import styled from 'styled-components';
import aboutIcon from '../../../assets/icons/msg_question-2.png'

const HeaderWrapper = styled.div`
    width: auto;
    height: 24px;
    background-color: #000080;
    border-top: 2px solid #bfc6c8;
    border-left: 2px solid #bfc6c8;
    border-right: 2px solid #bfc6c8;
    border-bottom: 2px solid #bfc6c8;
    color: white;
    font-family: w95fa;
    font-size: 0.9rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    padding-left: 5px;
    position: relative
`
const LogoImg = styled.img`
    width: 1rem;
    height: 1rem;
    background: transparent!important;
    margin-right: 5px;
`

const GroupButton = styled.div`
    margin-left: auto;
    margin-right: 3px;
`

const MinimizeWindow = styled.button`
    margin: 0px;
    padding: 2px;
    width: 16px;
    height: 14px;
    font-family: "MS Sans Serif", Tahoma, sans-serif;
    font-size: 8px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAWCAYAAADeiIy1AAAAKElEQVRIiWNgGAWjYBSMglEwCgYeMOKR+09FsxiYSDSMbDD8LBp+AABvQgEIfM1cdQAAAABJRU5ErkJggg==) 1px 1px / 13px 11px rgb(195, 199, 203);
    border: 0px;
    box-shadow: rgb(0 0 0) -1px -1px 0px inset, rgb(255 255 255) 1px 1px 0px inset, rgb(134 138 142) -2px -2px 0px inset;
    outline: 0px;
`
const FullScreenWindow = styled.button`
    margin: 0px;
    padding: 2px;
    width: 16px;
    height: 14px;
    font-family: "MS Sans Serif", Tahoma, sans-serif;
    font-size: 8px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAWAgMAAACj5mQmAAAADFBMVEUAAAD///+Gio7////2XM/nAAAAAnRSTlMAAHaTzTgAAAAnSURBVAjXY2BAB6uAYCkavR6JXv///38UOjQ0lJo0un3xQHv+w2kAF/k9BUn3Z2UAAAAASUVORK5CYII=) 1px 1px / 13px 11px rgb(195, 199, 203);
    border: 0px;
    box-shadow: rgb(0 0 0) -1px -1px 0px inset, rgb(255 255 255) 1px 1px 0px inset, rgb(134 138 142) -2px -2px 0px inset;
    outline: 0px;
`
const CloseWindow = styled.button`
    margin: 0px 0px 0px 2px;
    padding: 2px;
    width: 16px;
    height: 14px;
    font-family: "MS Sans Serif", Tahoma, sans-serif;
    font-size: 8px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAWAgMAAACj5mQmAAAACVBMVEUAAAD///8AAABzxoNxAAAAAnRSTlMAAHaTzTgAAAArSURBVAjXY2AgBLiWhkYtQKJZV4WuCkCmo1YtRaFDV4Wi0OjyaPrRzccPAFKbGzvAKuL+AAAAAElFTkSuQmCC) 1px 1px / 13px 11px rgb(195, 199, 203);
    border: 0px;
    box-shadow: rgb(0 0 0) -1px -1px 0px inset, rgb(255 255 255) 1px 1px 0px inset, rgb(134 138 142) -2px -2px 0px inset;
    outline: 0px;
    //filter: blur(0.3px);
`

interface WindowHeaderProps {
    title: String;
    onClickClose: Function
    onClickMinimize: Function
}

export default function WindowHeader(props: WindowHeaderProps) {
    return(
        <HeaderWrapper className="draggable-custom">
            <LogoImg src={aboutIcon}/>
            <>{props.title}</>
            <GroupButton>           
                <MinimizeWindow onClick={() => props.onClickMinimize()}/>
                <FullScreenWindow/>
                <CloseWindow onClick={() => props.onClickClose()}/>
            </GroupButton>

        </HeaderWrapper>
    )
}