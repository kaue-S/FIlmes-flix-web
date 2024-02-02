import Link from "next/link";
import styled from "styled-components";

export default function ListaSeries({ series }) {
  return (
    <StyledListaSeries>
      {series.map((serie) => (
        <Link href={`/posts/${serie.id}`} key={serie.id}>
          {serie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200${serie.poster_path}`}
              alt={`${serie.name} Poster`}
            />
          )}

          <strong>{serie.name}</strong>
          <p>
            <strong>Lançamento: </strong>
            {new Date(serie.first_air_date).toLocaleString("pt-BR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </p>
        </Link>
      ))}
    </StyledListaSeries>
  );
}

const StyledListaSeries = styled.div`
  * {
  }
`;
