import styled from "styled-components"
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

export const StyledFooter = styled.footer`
    background-color: var(--bg-light);
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .2em;

    & span {
        color: var(--orange);
        font-weight: 600;
    }

    & div {
        display: flex;
        gap: .2em;
    }
`

export const StyledGithubtIcon = styled(AiFillGithub)`
    font-size: 30px;
    color: var(--orange);
`

export const StyledLinkedinIcon = styled(AiFillLinkedin)`
    font-size: 30px;
    color: var(--orange);
`