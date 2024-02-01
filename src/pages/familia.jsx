import Head from "next/head";

export default function Familia ({seriesFamilia}){
    return (
        <>
         <Head>
            <title>Series de Família</title>
            <meta 
                name="description"
                content="Séries do gênero de família"
            />
            <meta name="keywords" content="Família, séries"/>
         </Head>
         <h1>Séries de família</h1>

        <div>
            {seriesFamilia.map((serie) => (
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
        </div>  
        </>
    );
}

    export async function getStaticProps() {
        const apiKey = "701bae577a262e4406a9a09430d701ed";
        const generoIdComedia = 10751;
      
        try {
          const resposta = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=${generoIdComedia}&language=pt-BR`);
          
          if (!resposta.ok) {
            throw new Error('Falha ao carregar series de família');
          }
      
          const dados = await resposta.json();
      
          return {
            props: {
              seriesFamilia: dados.results,
            },
          };
      
        } catch (error) {
          console.error(`Erro durante a obtenção dos dados: ${error.message}`);
          return {
            notFound: true,
          };
        }
    }   


