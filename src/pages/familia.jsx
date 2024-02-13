import Head from "next/head";
import Container from "@/components/ui/Container";
import ListaFilmes from "@/components/listaFilmes";
export default function Familia({ filmesFamilia }) {
  return (
    <>
      <Head>
        <title>Filmes Flix - Família</title>
        <meta name="description" content="Filmes do gênero de família" />
        <meta name="keywords" content="Família, Filmes" />
      </Head>
      <h2>Filmes de família</h2>

      <Container>
        <ListaFilmes filmes={filmesFamilia} />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const apiKey = "701bae577a262e4406a9a09430d701ed";
  const generoIdComedia = 10751;

  try {
    const resposta = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${generoIdComedia}&language=pt-BR`
    );

    if (!resposta.ok) {
      throw new Error("Falha ao carregar series de família");
    }

    const dados = await resposta.json();

    return {
      props: {
        filmesFamilia: dados.results,
      },
    };
  } catch (error) {
    console.error(`Erro durante a obtenção dos dados: ${error.message}`);
    return {
      notFound: true,
    };
  }
}
