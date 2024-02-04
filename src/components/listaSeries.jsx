import Link from "next/link";
import styled from "styled-components";

export default function ListaSeries({ series }) {
  return (
    <StyledListaSeries>
      {series.map((serie) => (
        <Link href={`/posts/${serie.id}`} key={serie.id}>
          <article>
          {serie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${serie.poster_path}`}
                alt={`${serie.name} Poster`}
              />
            ) : (
              <span>Imagem não disponível</span>
            )}

            <div>
             <strong>{serie.name}</strong><br />
              <p className="lancamento">
                {new Date(serie.first_air_date).toLocaleString("pt-BR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </p>
              <p className="descricao">
              {serie.overview ? serie.overview : "Descrição não disponível."}
              </p>
            </div>
          </article>
          
        </Link>
      ))}
    </StyledListaSeries>
  );
}

const StyledListaSeries = styled.div`
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
