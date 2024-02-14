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
  justify-content: center;
  flex-wrap: wrap;
  font-size: 1.2rem;
  margin: 0 10px;
  gap: 5px;

  a{ 
    padding: 12px;
    border-radius: 30px;
    width: 150px;
    text-align: center;
    background-color: #373737;
    color: white;
  }

  a.ativo {
    background: linear-gradient(248deg, rgba(250,149,22,1) 15%, rgba(254,54,5,1) 100%);
  }

  @media screen and (min-width: 640px){
    flex-wrap: nowrap;
    justify-content: center;
     
   
  }
  
`;
