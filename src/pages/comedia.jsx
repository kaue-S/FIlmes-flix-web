import Head from "next/head";
import Container from "@/components/ui/Container";

export default function Comedia ({seriesComedia}){
    return (
        <>
         <Head>
            <title>Series de Comédia</title>
            <meta 
                name="description"
                content="Séries do gênero de comédia"
            />
            <meta name="keywords" content="Comédia, séries, séries engraçadas"/>
         </Head>
         <h1>Séries de comédia</h1>

        <Container>
            {seriesComedia.map((serie) => (
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
        const generoIdComedia = 35;
      
        try {
          const resposta = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=${generoIdComedia}&language=pt-BR`);
          
          if (!resposta.ok) {
            throw new Error('Falha ao carregar series de comédia');
          }
      
          const dados = await resposta.json();
      
          return {
            props: {
              seriesComedia: dados.results,
            },
          };
      
        } catch (error) {
          console.error(`Erro durante a obtenção dos dados: ${error.message}`);
          return {
            notFound: true,
          };
        }
    }   
