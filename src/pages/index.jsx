import Head from "next/head";

export default function Home({ generos }) {
  return (
    <>
      <Head>
        <title>Séries Flix</title>
        <meta name="description" content="Site com indicações de séries" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div>
        <h1>Gêneros de Séries de TV</h1>
        <h2></h2>
        <ul>
          {generos.map((genero) => (
            <li key={genero.id}>{genero.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const apiKey = "701bae577a262e4406a9a09430d701ed";

  try {
    const resposta = await fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=pt-BR`);
    
    if (!resposta.ok) {
      throw new Error('Falha ao obter dados da API TMDB');
    }

    const dados = await resposta.json();

    return {
      props: {
        generos: dados.genres,
      },
    };

  } catch (error) {
    console.error(`Erro durante a obtenção dos dados: ${error.message}`);
    return {
      notFound: true,
    };
  }
}


