import { useState } from 'react';
import styled from 'styled-components';
import WindowHeader from '../../features/window/windowHeader/WindowHeader'
import WindowOptionsBar from '../../features/window/windowOptionsBar/WindowOptionsBar'
import WindowBody from '../../features/window/windowBody/WindowBody'
import WindowFooter from '../../features/window/windowFooter/WindowFooter'
import { useAppDispatch } from '../../app/hooks';
import { CURRICULUM } from '../pagesTypes'
import { closePage, minimizePage } from '../pagesSlicer';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import curriculumPDF from '../../assets/pdf/resume.pdf'



const CurriculumWrapper = styled.div`
    color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    margin: 3px;
    height: 96%;
    width: fit-content;
    min-width: 40rem;
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

  
export default function About() {
    const dispatch = useAppDispatch()
    const [pageNumber] = useState(1);

    return(
        <WindowBody>
            <WindowHeader title={CURRICULUM.title} icon={CURRICULUM.icon} onClickClose={() => dispatch(closePage(CURRICULUM.title))} onClickMinimize={() => dispatch(minimizePage(CURRICULUM.title))} />
            <WindowOptionsBar/>
            <CurriculumWrapper>
            <Document
                file={curriculumPDF}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            </CurriculumWrapper>
            <WindowFooter/>
        </WindowBody>
    )
}