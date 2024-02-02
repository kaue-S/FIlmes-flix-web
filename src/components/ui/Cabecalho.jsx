import styled from "styled-components";
import Image from "next/image";
import Menu from "./Menu";

export default function Cabecalho (){
    return (
        
       <StyledHeader>
        <div>
            <h1>
                <Image 
                src="/images/logotipo.png" width={100} height={100} alt="Televisão antiga"
                />
                Séries Flix
            </h1>
                <Menu />
        </div>
        </StyledHeader>
        
    )
}

const StyledHeader = styled.header`

    div h1{
       margin-right: 2rem; 
    }

    h1{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;