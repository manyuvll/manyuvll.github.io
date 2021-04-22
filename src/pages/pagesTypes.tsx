import aboutIcon from '../../../assets/icons/msg_question-2.png'

export interface Page {
    title: string,
    icon: string,
    isOpened: boolean,
    isMinimized: boolean
}

export const ABOUT = {
    title: "AboutMe.txt",
    icon: aboutIcon,
    isOpened: true,
    isMinimized: false
}