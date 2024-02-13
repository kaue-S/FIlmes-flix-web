import Link from "next/link";
import styled from "styled-components";
import notaArredondada from "@/lib/funcoesUtilitarias";

export default function ListaFilmes({ filmes }) {
  return (
    <StyledListaFilmes>
      {filmes.map((filme) => (
        <Link href={`/posts/${filme.id}`} key={filme.id}>
          <article>
          {filme.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${filme.poster_path}`}
                alt={`${filme.name} Poster`}
              />
            ) : (
              <span>Imagem não disponível</span>
            )}

            <div>
             <strong>{filme.title}</strong><br />
              <div className="avaliacao">
                <p className="lancamento">
                  {new Date(filme.release_date).toLocaleString("pt-BR", {
                    month: "2-digit",
                    year: "numeric",
                  })}
                </p>
                <p>{notaArredondada(filme.vote_average)}</p>
              </div>
            </div>
          </article>
          
          
        </Link>
      ))}
    </StyledListaFilmes>
  );
}

const StyledListaFilmes = styled.div`
margin: 1rem;
display: flex;
gap: 15px;

article{
  position: relative;
}

div{
  background-color: transparent;
  top: 0;
  position: absolute;
  border: 1px solid red;
  width: 100%;
  }

  p, strong{
    background-color: transparent;
  }

  .avaliacao{
    display: flex;
    position: relative;
    justify-content: space-around;
    top: 260px;
  }
`;
