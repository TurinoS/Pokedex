import styled from "styled-components";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReactNode } from 'react';

const StyledWrapper = styled.main`
    min-height: calc(100vh - 120px);
    padding: 3vh 7.5vw;
`

function Wrapper({ children }: {children: ReactNode}) {
    return(
       <> 
            <Header />
            <StyledWrapper>
                {children}
            </StyledWrapper>
            <Footer />
        </>
    )
}

export default Wrapper