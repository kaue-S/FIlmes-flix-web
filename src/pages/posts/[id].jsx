import ListaSeries from "@/components/listaSeries";
import Head from "next/head";

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

      <div>
        <h2>{serie.original_name}</h2>
        {serie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w200${serie.poster_path}`}
            alt={`${serie.name} Poster`}
          />
        )}
        <h3>{serie.genre_ids}</h3>
        <p>
          <strong>Lançamento: </strong>
          {serie.first_air_date}
        </p>
        <p>
          <strong>Descrição: </strong>
          {serie.overview}
        </p>
      </div>
    </>
  );
}
