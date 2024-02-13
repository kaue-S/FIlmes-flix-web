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
              <p className="lancamento">
                {new Date(filme.release_date).toLocaleString("pt-BR", {
                  month: "2-digit",
                  year: "numeric",
                })}
              </p>
              <p>{notaArredondada(filme.vote_average)}</p>
              <p className="descricao">
              {filme.overview ? filme.overview : "Descrição não disponível."}
              </p>
            </div>
          </article>
          
        </Link>
      ))}
    </StyledListaFilmes>
  );
}

const StyledListaFilmes = styled.div`
margin: 1rem;

b{
  color: gray;
}

span{
  text-align: center;
  margin: auto;
}

article{ 
    display: flex;
    margin-bottom: 25px;
    height: 140px;
    width: 100%;
    box-shadow: 0px 3px 13px 0px gray;
    border-radius: 5px;
    overflow: hidden;
    background-color: white;
  }
 
  article:hover{
    transform: scale(1.02);
  }

  div{
    margin: 10px;
  }

  .lancamento{
    color: #B6B6B6;
    margin-bottom: 10px;
  }

.descricao{
  white-space: wrap;
  color: black;
  margin: auto;

}

 div strong{
  color: black;
  margin-bottom: 15px;
 }

 @media screen and (min-width: 770px) {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;

  article{
    height: 300px;
    width: 400px;
    margin: auto;
  }

  .descricao{
    width: 100%;
    height: 150px;
    overflow: hidden;
    margin-top: 15px;
  }

}
 
`;
