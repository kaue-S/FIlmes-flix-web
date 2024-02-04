import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const rotaAtual = usePathname();
  const linkAtivo = (rota) => (rotaAtual === rota ? "ativo" : "");

  return (
    <StyledNav>
      <Link href="/" className={linkAtivo("/")}>
        Populares
      </Link>
      <Link href="/acao" className={linkAtivo("/acao")}>
        Ação
      </Link>
      <Link href="/comedia" className={linkAtivo("/comedia")}>
        Comédia
      </Link>
      <Link href="/familia" className={linkAtivo("/familia")}>
        Família
      </Link>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  border: 2px solid;
  border-radius: 0 0 8px 8px;
  margin: auto;
  background-color: black;
  
  a.ativo{
    background-color: #993399;
  }

  a {
    padding: 0.8rem 1.4rem;
    color: white;
    margin: 0;
    border-radius: 4px;

    &:hover {
      background-color: #993399; 
    }
  }

  @media screen and (min-width: 700px){
    width: 35%;

    a{
      padding: 0.5rem 2rem;
      font-size: 1.5rem;
    }
  }
`;
