import styled from "styled-components";
import Image from "next/image";
import Menu from "./Menu";

export default function Cabecalho() {
  return (
    <StyledHeader>
      <div>
        
        <h1>
          
          <Image
            src="/images/logotipo.png"
            width={100}
            height={100}
            alt="Televisão antiga"
          />
          Filmes Flix
        
        </h1><hr />

        <h2>Categorias</h2>
        <Menu />
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`

  h1 {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    padding-right: 10px;
  }

  hr{
    width: 80%;
    margin: auto;
  }

  h2{
    color: white;
    margin-top: 50px;
    font-size: 2.5rem;
  }
`;
