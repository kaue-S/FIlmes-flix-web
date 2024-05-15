import styled from "styled-components";
import Image from "next/image";
import Menu from "./Menu";
import Link from "next/link";

export default function Cabecalho() {
  return (
    <StyledHeader>
      <div>
        <Link href={"/"}>
          <h1>
            <Image
              src="/images/logotipo.png"
              width={50}
              height={50}
              alt="Televisão antiga"
            />
            Filmes Flix
          </h1>
        </Link>

        <Menu />
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`

  div{
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 2px solid white;
    padding: 15px 0;
  }

  h1 {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    padding-right: 10px;
    border: 2px solid red;
  }

  h2 {
    color: white;
    margin-top: 50px;
    font-size: 2.5rem;
  }

  @media screen and(min-width: 700px) {
    font-size: 3rem;
  }
`;
