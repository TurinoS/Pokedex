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
    margin: 5px 0 0 5px;
`;

export const SunIcon = styled(BsFillSunFill)`
    font-size: 20px;
    margin: 4px 0 0 7px;
`;