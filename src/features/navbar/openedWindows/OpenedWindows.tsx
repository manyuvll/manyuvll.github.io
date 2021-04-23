import styled from 'styled-components'
import { useAppSelector , useAppDispatch} from '../../../app/hooks';
import { selectAllPages, maximizeOrMinimizePage } from '../../../pages/pagesSlicer';
import { Page } from '../../../pages/pagesTypes';

interface OpenedWindowsItemProps {
    isMinimized: boolean
}

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
    margin-left: 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ${(props: OpenedWindowsItemProps) => (props.isMinimized ? 
            `
            border-top: 2px solid #f9f9f9;
            border-left: 2px solid #f9f9f9;
            border-bottom: 2px solid #20262b;
            border-right: 2px solid #20262b;
            ` 
        :
            `
            background-image: linear-gradient(45deg, white 25%, transparent 25%), linear-gradient(-45deg, white 25%, transparent 25%), linear-gradient(45deg, transparent 75%, white 75%), linear-gradient(-45deg, transparent 75%, white 75%);
            background-size: 1px 1px;
            background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
            border-bottom: 2px solid #f9f9f9;
            border-right: 2px solid #f9f9f9;
            border-top: 2px solid #20262b;
            border-left: 2px solid #20262b;
            `
    )}
    display: flex;
    align-items: center;
    font-family: w95fa;
`
const LogoImg = styled.img`
    width: 1rem;
    height: 1rem;
    background: transparent!important;
    margin-right: 5px;
    margin-left: 5px;
`
const TabText = styled.span`
    margin-top: 3px;
`

export default function OpenedWindows() {
    const openedPages: Array<Page> = useAppSelector(selectAllPages)
    const dispatch = useAppDispatch()
    console.log(openedPages)
    return (
    <OpenedWindowsWrapper>
        {
            openedPages.map(page => (
                <OpenedWindowsItem isMinimized={page.isMinimized} onClick={() => dispatch(maximizeOrMinimizePage(page.title))}>
                    <LogoImg src={page.icon}/>
                    <TabText>{page.title}</TabText>
                </OpenedWindowsItem>
            ))
        }
    </OpenedWindowsWrapper>
    )
}