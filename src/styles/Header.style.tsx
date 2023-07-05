import styled from "styled-components";
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';

export const StyledHeader = styled.header`
    background-color: var(--bg-light);
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5em;
    color: var(--orange);

    & div {
        display: flex;
        align-items: center;

        & img {
            width: 75px;
            height: 75px;
        }
    }

    & input {
        background-color: var(--bg-dark);
        border: 1px solid var(--orange);
        border-radius: var(--border-radius);
        padding: .25em 1.5em;
        font-size: 18px;
        color: var(--orange);

        &:focus {
            border: 2px solid var(--orange);
            outline: none; 
        }

        &::placeholder {
            color: var(--orange);
        }
    }
`;

export const MoonIcon = styled(BsFillMoonStarsFill)`
    font-size: 18px;
    margin-left: 5px;
`;

export const SunIcon = styled(BsFillSunFill)`
    font-size: 20px;
    margin-left: 7px;
`;