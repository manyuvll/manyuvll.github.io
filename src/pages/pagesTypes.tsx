import aboutIcon from '../assets/icons/notepad.png'
import curriculumIcon from '../assets/icons/curriculumIcon.png'
import contactFolderIcon from '../assets/icons/contact-folder.png'

export interface Page {
    title: string,
    icon: string,
    isMinimized: boolean
    zIndex: number
    width: string
}

export const ABOUT = {
    title: "AboutMe.txt",
    icon: aboutIcon,
    isMinimized: false,
    width: "30rem",
    zIndex: 1
}

export const CURRICULUM = {
    title: "Curriculum.pdf",
    icon: curriculumIcon,
    isMinimized: false,
    width: "fit-content",
    zIndex: 1
}

export const CONTACTME = {
    title: "ContactMe",
    icon: contactFolderIcon,
    isMinimized: false,
    width: "fit-content",
    zIndex: 1
}
export const pagesTypes = [ABOUT, CURRICULUM, CONTACTME]

