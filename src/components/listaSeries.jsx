import styled from "styled-components";

export default function ListaSeries({ series }) {
  return (
    <StyledListaSeries>
      {series.map((serie) => (
        <article key={serie.id}>
          {serie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200${serie.poster_path}`}
              alt={`${serie.name} Poster`}
            />
          )}
          <strong>{serie.name}</strong>
          <p>{serie.first_air_date}</p>
        </article>
      ))}
    </StyledListaSeries>
  );
}

const StyledListaSeries = styled.div``;
