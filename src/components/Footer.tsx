import { StyledFooter, StyledGithubtIcon, StyledLinkedinIcon } from "@/styles/Footer.style";

export default function Footer() {
    return(
        <StyledFooter>
            <p>Desenvolvido por <span>Paulo Turino</span>.</p>
            <div>
                <a  href='https://github.com/TurinoS'><StyledGithubtIcon /></a>
                <a  href='https://www.linkedin.com/in/paulo-turino/'><StyledLinkedinIcon /></a>
            </div>
        </StyledFooter>
    )
}