import styled from 'styled-components';

const OptionsWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 1.5rem;
    align-items: center;
`

const OptionText = styled.span`
    margin-left: 8px;
    margin-right: 4px;
    font-family: 'win95_light';
    font-size: 0.6rem;
    &:first-letter {
        text-decoration:underline;
    }
    &:hover {
        background-color: #000080;
        color: #cbcce5;
    }
`

export default function WindowOptionsBar() {
    return (
        <OptionsWrapper>
            <OptionText>
                File
            </OptionText>
            <OptionText>
                Edit
            </OptionText>
            <OptionText>
                View
            </OptionText>
            <OptionText>
                Help
            </OptionText>
        </OptionsWrapper>
    )
}