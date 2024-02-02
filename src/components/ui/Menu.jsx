import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const rotaAtual = usePathname();
  const linkAtivo = (rota) => (rotaAtual === rota ? "ativo" : "");

  return (
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
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  border: 2px solid;
  border-radius: 0 0 8px 8px;
  width: 35%;
  margin: auto;

  a {
    padding: 0.8rem 1rem;

    &:hover {
    }
  }
`;
