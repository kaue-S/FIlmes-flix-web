import Link from "next/link";
import styled from "styled-components";

export default function ListaSeries({ series }) {
  return (
    <StyledListaSeries>
      {series.map((serie) => (
        <Link href={`/posts/${serie.id}`} key={serie.id}>
          <article>
            {serie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${serie.poster_path}`}
                alt={`${serie.name} Poster`}
              />
            )}

            <br /><strong>{serie.name}</strong>

            <div>
              <strong>Lançamento: </strong>
              <p>

              {new Date(serie.first_air_date).toLocaleString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
              </p>

              <p>
                {serie.overview}
              </p>
              
            </div>
          </article>
        </Link>
      ))}
    </StyledListaSeries>
  );
}

const StyledListaSeries = styled.div`


article{ 
    display: flex;
    text-align:center; 
    margin-bottom: 35px;
    border: 1px solid black;
  }

  img{
    width: 80px;
    heigth: 80px;
  }

  div{
    color: red;
  }

 strong{
  color: black;
 }

 
`;
