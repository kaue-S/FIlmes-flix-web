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
                src={`https://image.tmdb.org/t/p/w300${filme.poster_path}`}
                alt={`${filme.name} Poster`}
              />
            ) : (
              <span>Imagem não disponível</span>
            )}

            <strong>{filme.title}</strong>
            <br />
            <div className="avaliacao">
              <p className="lancamento">
                {" " +
                  new Date(filme.release_date).toLocaleString("pt-BR", {
                    year: "numeric",
                  })}
              </p>
              <p className="nota">⭐{notaArredondada(filme.vote_average)}</p>
            </div>
          </article>
        </Link>
      ))}
    </StyledListaFilmes>
  );
}

const StyledListaFilmes = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 70px;

  img {

    /* filter: brightness(65%); */
    border-radius: 10px;
    width: 165px;
  }

  article {
    position: relative;
  }

  article:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }

  strong {
   
    position: absolute;
    left: 0;
    left: 15px;
    bottom: 35px;
    color: white;
    
  }

  .avaliacao {
    display: flex;
    position: absolute;
    bottom: 8px;
    left: 15px;
    color: #ffff;
    font-weight: bold;
  }

  .nota {
    position: absolute;
    left: 85px;
  }

  div {
    background-color: transparent;
  }

  p,
  strong {
    background-color: transparent;
  }

  @media screen and (min-width: 800px) {
    margin-left: 15px;
    margin-right: 15px;
    img {
      width: 240px;
    }

    .nota {
      left: 150px;
    }
  }
`;
