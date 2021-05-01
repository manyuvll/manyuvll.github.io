import styled from 'styled-components';
import { useAppDispatch } from '../../app/hooks';
import { ABOUT, CURRICULUM, CONTACTME } from '../../pages/pagesTypes'
import { openPage } from '../../pages/pagesSlicer'

const DesktopItems = styled.div`
    height: 50vh;
    width: 5rem;
    display: flex;
    flex-direction: column;
    margin-left: 12px;
    margin-top: 10px;
    `

const DesktopObjectWrapper = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    place-items: center;
    margin-bottom: 20px;
`

const DesktopObjectImg = styled.img `

`
const DesktopObjectTitle = styled.div `
    font-family: w95fa;
    font-size: 0.9rem;
    color: white;
    margin-top: 5px;
`

export default function DesktopObjects() {
    const dispatch = useAppDispatch()

    return (
    <DesktopItems>
        <DesktopObjectWrapper onClick={() => dispatch(openPage(ABOUT))}>
            <DesktopObjectImg src={ABOUT.icon}/>
            <DesktopObjectTitle>
                {ABOUT.title}
            </DesktopObjectTitle>
        </DesktopObjectWrapper>
        <DesktopObjectWrapper onClick={() => dispatch(openPage(CURRICULUM))}>
            <DesktopObjectImg src={CURRICULUM.icon}/>
            <DesktopObjectTitle>
                {CURRICULUM.title}
            </DesktopObjectTitle>
        </DesktopObjectWrapper>
        <DesktopObjectWrapper onClick={() => dispatch(openPage(CONTACTME))}>
            <DesktopObjectImg src={CONTACTME.icon}/>
            <DesktopObjectTitle>
                {CONTACTME.title}
            </DesktopObjectTitle>
        </DesktopObjectWrapper>
    </DesktopItems>
    )
}