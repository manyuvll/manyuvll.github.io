import styled from 'styled-components'
import internetExplorer from '../../assets/icons/ie.png'

interface Item {
    label: string,
    url: string, 
    icon: string
}

const items: Array<Item> = [
    {
        label: `Windows 95 Portfolio`,
        url: `https://github.com/manyuvll/windows95Portfolio`,
        icon: internetExplorer
    },
    {
        label: `Hareteiru (Weather APP)`,
        url: `https://github.com/manyuvll/hareteiru`,
        icon: internetExplorer
    },
    {
        label: `Tom Nook's Listing`,
        url: `https://github.com/manyuvll/shopping-list`,
        icon: internetExplorer
    },

]

const ItemsWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    margin-left: 5px;
`

const ItemImg = styled.img `
    width: 30px;
    height: auto;
    margin-bottom: 5px;
`
const ItemLink = styled.a `
    width: 50px;
    font-family: w95fa;
    font-size: 0.9rem;
    color: black;
    margin-top: 15px;
    margin-left: 30px;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;

`


export default function ContactMeItems() {
    return(
        <ItemsWrapper>
            {
                items.map(item => (
                        <ItemLink href={item.url}>
                            <ItemImg src={item.icon}/>
                            {item.label}
                        </ItemLink>
                ))
            }
        </ItemsWrapper>
    )
}