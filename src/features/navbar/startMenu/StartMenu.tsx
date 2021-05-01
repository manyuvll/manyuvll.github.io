import styled from 'styled-components';
import restart from '../../../assets/icons/shut_down_normal-2.png'
import contactFolder from '../../../assets/icons/contact-folder.png'
import React, { useRef, useEffect } from "react";
import { useAppDispatch } from '../../../app/hooks';
import { click } from '../startButton/startButtonSlice';
import { openPage } from '../../../pages/pagesSlicer'
import { ABOUT, CURRICULUM, CONTACTME } from '../../../pages/pagesTypes'

const StartMenuWrapper = styled.div`
    position: absolute;
    background-color: #c0c0c0;
    bottom: 0;
    left: 0;
    margin-bottom: 38px;
    width: 14rem;
    height: 18rem;
    margin-left: 3px;
    border-top: 2px solid #f9f9f9;
    border-left: 2px solid #f9f9f9;
    border-right: 2px solid #0d0d0d;
    border-bottom: 2px solid #0d0d0d;
    box-sizing: border-box;
    display: flex;
    flex-direction: row; 
`

const StartMenuWindowsLogo = styled.div`
    background-color: #808080;
    bottom: 0;
    left: 0;
    width: 2.3rem;
    display: flex;
    align-items: flex-end;    
    flex-direction: column-reverse; 
`
const WindowsSpan = styled.span`
    font-family: "windows_start_menu";
    writing-mode: vertical-lr;
    transform:rotate(180deg);
    color: #c0c0c0;
    font-size: 2.1rem;
    margin-bottom: 7px;
    //filter: blur(0.5px);
`
const NinetyFiveSpan = styled.span`
    font-family: "ninety_five";
    writing-mode: vertical-lr;
    transform:rotate(180deg) scaleY(1.2);;
    color: #f9f9f9;
    font-size: 2rem;
    //filter: blur(0.5px);
    font-stretch: expanded;
    letter-spacing: -2px;
    margin-bottom: 2px;
    margin-right: -2px;
`

const StartMenuItemsList = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column-reverse;
`

const StartMenuItem = styled.div`
    height: 2.6rem;
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 6px;
    &:hover {
        background-color: #000080;
        color: #cbcce5;
    }
`

const ItemIcon = styled.img`

`
const ItemTitle = styled.span`
    font-family: 'win95_light';
    font-size: 0.6rem;
    margin-left: 8px;
    &:first-letter {
        text-decoration:underline;
    }
`

const ItemSeparator = styled.span`
    width: 99%;
    height: 1px;
    background-color: #878787;
    border-bottom: 1px solid #f0f0f0;
    border-radius: 1px;
`

function useOutsideAlerter(ref: React.RefObject<HTMLDivElement>, startButtonRef: React.RefObject<HTMLDivElement>)
 {
    const dispatch = useAppDispatch()
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: Event) {
            if (ref.current && startButtonRef.current && !ref.current.contains(event.target as Node) && !startButtonRef.current.contains(event.target as Node)) {
                dispatch(click())
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, dispatch, startButtonRef]);
}

interface StartMenuProps {
    startButtonRef: React.RefObject<HTMLDivElement>
}

export default function StartMenu({ startButtonRef }: StartMenuProps) {
    const dispatch = useAppDispatch();
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, startButtonRef);

    return (
        <StartMenuWrapper ref={wrapperRef}>
            <StartMenuWindowsLogo>
                <WindowsSpan>Windows</WindowsSpan>
                <NinetyFiveSpan>95</NinetyFiveSpan>
            </StartMenuWindowsLogo>
            <StartMenuItemsList>
                <StartMenuItem>
                    <ItemIcon src={restart}/>
                    <ItemTitle>Restart</ItemTitle>
                </StartMenuItem>
                <ItemSeparator/>
                <StartMenuItem onClick={() => dispatch(openPage(ABOUT)) && dispatch(click)}>
                    <ItemIcon src={ABOUT.icon}/>
                    <ItemTitle>{ABOUT.title}</ItemTitle>
                </StartMenuItem>
                <StartMenuItem onClick={() => dispatch(openPage(CURRICULUM)) && dispatch(click)}>
                    <ItemIcon src={CURRICULUM.icon}/>
                    <ItemTitle>{CURRICULUM.title}</ItemTitle>
                </StartMenuItem>
                <StartMenuItem onClick={() => dispatch(openPage(CONTACTME)) && dispatch(click)}>
                    <ItemIcon src={CONTACTME.icon}/>
                    <ItemTitle>{CONTACTME.title}</ItemTitle>
                </StartMenuItem>
                <StartMenuItem>
                    <ItemIcon src={restart}/>
                    <ItemTitle>WIP</ItemTitle>
                </StartMenuItem>
                <StartMenuItem>
                    <ItemIcon src={restart}/>
                    <ItemTitle>WIP</ItemTitle>
                </StartMenuItem>
                <StartMenuItem>
                    <ItemIcon src={restart}/>
                    <ItemTitle>WIP</ItemTitle>
                </StartMenuItem>
            </StartMenuItemsList>
        </StartMenuWrapper>
    )

}