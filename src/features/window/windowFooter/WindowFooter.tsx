import styled from 'styled-components';

const FooterWrapper = styled.div`
    display: flex;
    box-sizing: border-box;
`
const Footer = styled.div`
    width: 100%;
    margin-bottom: 2px;
    margin-right: 2px;
    margin-left: 2px;
    height: 1.4rem;
    border-bottom: 1px solid #f9f9f9;
    border-right: 1px solid #f9f9f9;
    border-top: 1px solid #93979a;
    border-left: 1px solid #93979a;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
`
const ResizerIcon = styled.div`
    width: 23px;
    height: 23px;
    background-image: linear-gradient(
135deg
, #c6c6c6 16.67%, rgb(198, 198, 198) 16.67%, rgb(198, 198, 198) 33.33%, rgb(132, 133, 132) 33.33%, rgb(132, 133, 132) 50%, rgb(254, 254, 254) 50%, rgb(254, 254, 254) 66.67%, rgb(198, 198, 198) 66.67%, rgb(198, 198, 198) 83.33%, rgb(132, 133, 132) 83.33%, rgb(132, 133, 132) 100%);
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
`

export default function WindowFooter() {
    return (
    <FooterWrapper>
        <Footer>
            <ResizerIcon/>
        </Footer>
    </FooterWrapper>)
}