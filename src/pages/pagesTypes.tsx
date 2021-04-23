import aboutIcon from '../assets/icons/notepad.png'

export interface Page {
    title: string,
    icon: string,
    isMinimized: boolean
}

export const ABOUT = {
    title: "AboutMe.txt",
    icon: aboutIcon,
    isMinimized: false
}