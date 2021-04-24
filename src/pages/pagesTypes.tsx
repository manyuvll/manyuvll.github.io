import aboutIcon from '../assets/icons/notepad.png'
import curriculumIcon from '../assets/icons/curriculumIcon.png'

export interface Page {
    title: string,
    icon: string,
    isMinimized: boolean
    zIndex: string
    width: string
}

export const ABOUT = {
    title: "AboutMe.txt",
    icon: aboutIcon,
    isMinimized: false,
    width: "30rem",
    zIndex: "1"
}

export const CURRICULUM = {
    title: "Curriculum.pdf",
    icon: curriculumIcon,
    isMinimized: false,
    width: "fit-content",
    zIndex: "1"
}