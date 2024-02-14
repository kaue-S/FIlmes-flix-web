import ListaSeries from "@/components/listaFilmes";
import notaArredondada from "@/lib/funcoesUtilitarias";
import Head from "next/head";
import styled from "styled-components";

export async function getStaticProps({ params }) {
  const { id } = params;

  try {
    const apiKey = "701bae577a262e4406a9a09430d701ed";
    const resposta = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`
    );

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    const dados = await resposta.json();

    return {
      props: {
        filme: dados,
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

export default function filmePage({ filme }) {
  return (
    <>
      <Head>
        <title>Series Flix</title>
        <meta name="description" content="Descrição da série" />
      </Head>

      <StyledDiv>
      <article>
        <h2>{filme.title}</h2>
        {filme.backdrop_path && (
          <img
            src={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`}
            alt={`${filme.title} Poster`}
          />
        )}

        <p>
          <strong>Lançamento: </strong>
          {new Date(filme.release_date).toLocaleString("pt-BR", {
                  year: "numeric",
                })}
        </p><br />
      </article> 
      <p>{notaArredondada(filme.vote_average)}- </p>
        <p> duração: {filme.runtime} min</p>
        <p className="descricao">
          <strong>Descrição: </strong><br /><br />
          {filme.overview ? filme.overview : "Descrição não disponível."}
        </p>
        {console.log(filme)}
      </StyledDiv>
    </>
  );
}


const StyledDiv = styled.div`
text-align: center;
margin: 1rem;
padding: 1rem;
box-shadow: 0px 3px 13px 0px gray;

 .descricao{
  padding: 1rem;
  text-align: left;
  
 }

 

 @media screen and (min-width: 700px){
  display: flex;
  align-items: center;
  margin: 2rem;

  img{
    
  }

  .descricao{
    width: 50%;
    font-size: 1.5rem;
  }

  strong{
    font-size: 1.7rem;
  }

 }
`;
