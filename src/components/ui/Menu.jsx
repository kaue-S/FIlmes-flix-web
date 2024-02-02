import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu (){

    const rotaAtual = usePathname();
    const linkAtivo = (rota) => (rotaAtual === rota ? "ativo" : "");

    return(
        <StyledNav>
        <Link href="/" className={linkAtivo("/")}>
          Inicio
        </Link>
        <Link href="/acao" className={linkAtivo("/acao")}>
          Ação e aventura
        </Link>
        <Link href="/comedia" className={linkAtivo("/comedia")}>
          Comédia
        </Link>
        <Link href="/familia" className={linkAtivo("/familia")}>
          Família
        </Link>
      </StyledNav>
    )
}

const StyledNav = styled.nav`

`;