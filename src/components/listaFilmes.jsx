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
              <div className="imagem-box">
                <img
                  src={`https://image.tmdb.org/t/p/w300${filme.poster_path}`}
                  alt={`${filme.name} Poster`}
                />

              </div>
            ) : (
              <span>Imagem não disponível</span>
            )}
            <div className="infos">
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

  .imagem-box{
    /* border: 1px solid white; */
    
  }

   .imagem-box::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
    pointer-events: none;
    border-radius: 10px;
  }

  img {
    border-radius: 10px;
    width: 165px;
  }

  .infos{
    position: absolute;
    width: 100%;
    bottom: 5px;
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
    bottom: 50px;
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
