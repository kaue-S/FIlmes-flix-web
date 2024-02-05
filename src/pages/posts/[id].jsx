import ListaSeries from "@/components/listaSeries";
import Head from "next/head";
import styled from "styled-components";

export async function getStaticProps({ params }) {
  const { id } = params;

  try {
    const apiKey = "701bae577a262e4406a9a09430d701ed";
    const resposta = await fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=pt-BR`
    );

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    const dados = await resposta.json();

    return {
      props: {
        serie: dados,
      },
    };
  } catch (error) {
    console.error("Erro ao carregar dados: " + error.message);
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  return {
    paths: [],

    fallback: "blocking",
  };
}

export default function SeriePage({ serie }) {
  return (
    <>
      <Head>
        <title>Series Flix</title>
        <meta name="description" content="Descrição da série" />
      </Head>

      <StyledDiv>
        <article>
          <h2>{serie.original_name}</h2>
          {serie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200${serie.poster_path}`}
              alt={`${serie.name} Poster`}
            />
          )}

          <p>
            <strong>Lançamento: </strong>
            {new Date(serie.first_air_date).toLocaleString("pt-BR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </p>
          <br />
        </article>
        <p className="descricao">
          <strong>Descrição: </strong>
          <br />
          <br />
          {serie.overview ? serie.overview : "Descrição não disponível."}
        </p>
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  text-align: center;
  margin: 1rem;
  padding: 1rem;
  box-shadow: 0px 3px 13px 0px gray;

  .descricao {
    padding: 1rem;
    text-align: left;
  }

  @media screen and (min-width: 700px) {
    display: flex;
    align-items: center;
    margin: 2rem;

    img {
      width: 400px;
    }

    .descricao {
      width: 50%;
      font-size: 1.5rem;
    }

    strong {
      font-size: 1.7rem;
    }
  }
`;
