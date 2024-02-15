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
              width={100}
              height={100}
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
  h1 {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    padding-right: 10px;
  }

  hr {
    width: 80%;
    margin: auto;
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
