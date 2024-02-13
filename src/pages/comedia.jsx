import Head from "next/head";
import Container from "@/components/ui/Container";
import ListaFilmes from "@/components/listaFilmes";

export default function Comedia({ filmesComedia }) {
  return (
    <>
      <Head>
        <title>Series Flix - Comédia</title>
        <meta name="description" content="Filmes do gênero de comédia" />
        <meta name="keywords" content="Comédia, filmes, filmes engraçados" />
      </Head>
      <h2>Séries de comédia</h2>

      <Container>
        <ListaFilmes filmes={filmesComedia} />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const apiKey = "701bae577a262e4406a9a09430d701ed";
  const generoIdComedia = 35;

  try {
    const resposta = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${generoIdComedia}&language=pt-BR`
    );

    if (!resposta.ok) {
      throw new Error("Falha ao carregar series de comédia");
    }

    const dados = await resposta.json();

    return {
      props: {
        filmesComedia: dados.results,
      },
    };
  } catch (error) {
    console.error(`Erro durante a obtenção dos dados: ${error.message}`);
    return {
      notFound: true,
    };
  }
}
