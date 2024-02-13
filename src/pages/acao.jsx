import Head from "next/head";
import Container from "@/components/ui/Container";
import ListaFilmes from "@/components/listaFilmes";

export default function Acao({ filmesAcao }) {
  return (
    <>
      <Head>
        <title>Filmes Flix - ação</title>
        <meta
          name="description"
          content="Filmes do gênero de ação e aventura"
        />
        <meta
          name="keywords"
          content="Filmes, Ação, Aventura, Filmes de Ação, Filmes de Aventura, Filmes de fantasia"
        />
      </Head>
      <h2>Filmes de Ação</h2>
      <Container>
        <ListaFilmes filmes={filmesAcao} />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const apiKey = "701bae577a262e4406a9a09430d701ed";
  const generoAcaoAventura = 28;

  try {
    const resposta = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${generoAcaoAventura}&language=pt-BR`
    );

    if (!resposta.ok) {
      throw new Error("Falha ao carregar series de ação e aventura");
    }

    const dados = await resposta.json();

    return {
      props: {
        filmesAcao: dados.results,
      },
    };
  } catch (error) {
    console.error(`Erro durante a obtenção dos dados: ${error.message}`);
    return {
      notFound: true,
    };
  }
}
