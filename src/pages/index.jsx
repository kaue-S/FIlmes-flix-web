import Container from "@/components/ui/Container";
import Head from "next/head";

export default function Home({ seriesPopulares }) {
  return (
    <>
      <Head>
        <title>Séries Flix</title>
        <meta name="description" content="Site com indicações de séries" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>As melhores Séries de TV você encontra aqui!</h1>
      <Container>
        {seriesPopulares.map((serie) => (
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
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const apiKey = "701bae577a262e4406a9a09430d701ed";

  try {
    const resposta = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=pt-BR`
    );

    if (!resposta.ok) {
      throw new Error("Falha ao obter dados da API TMDB");
    }

    const dados = await resposta.json();

    return {
      props: {
        seriesPopulares: dados.results,
      },
    };
  } catch (error) {
    console.error(`Erro durante a obtenção dos dados: ${error.message}`);
    return {
      notFound: true,
    };
  }
}
