import styled from 'styled-components';
import notePadIcon from '../../assets/icons/notepad.png'
import contactFolder from '../../assets/icons/contact-folder.png'

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
}`

const DesktopObjectImg = styled.img `

`
const DesktopObjectTitle = styled.div `
    font-family: w95fa;
    font-size: 0.9rem;
    color: white;
    margin-top: 5px;
`

export default function DesktopObject() {
    return (
    <DesktopItems>
        <DesktopObjectWrapper>
            <DesktopObjectImg src={notePadIcon}/>
            <DesktopObjectTitle>
                AboutMe.txt
            </DesktopObjectTitle>
        </DesktopObjectWrapper>
        <DesktopObjectWrapper>
            <DesktopObjectImg src={contactFolder}/>
            <DesktopObjectTitle>
                ContactMe
            </DesktopObjectTitle>
        </DesktopObjectWrapper>
    </DesktopItems>
    )
}