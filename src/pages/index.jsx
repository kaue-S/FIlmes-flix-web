import ListaSeries from "@/components/listaSeries";
import Container from "@/components/ui/Container";
import Head from "next/head";

export default function Home({ filmesPopulares }) {
  return (
    <>
      <Head>
        <title>Séries Flix - Populares</title>
        <meta name="description" content="Site com indicações de séries" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Mais populares</h2>
      <Container>
        <ListaSeries filmes={filmesPopulares} />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const apiKey = "701bae577a262e4406a9a09430d701ed";

  try {
    const resposta = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR`
    );

    if (!resposta.ok) {
      throw new Error("Falha ao obter dados");
    }

    const dados = await resposta.json();

    return {
      props: {
        filmesPopulares: dados.results,
      },
    };
  } catch (error) {
    console.error(`Erro durante a obtenção dos dados: ${error.message}`);
    return {
      notFound: true,
    };
  }
}


