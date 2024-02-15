import notaArredondada from "@/lib/funcoesUtilitarias";
import Head from "next/head";
import Link from "next/link";
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
        <title>{filme.title}</title>
        <meta name="description" content={filme.overview} />
      </Head>

      <StyledDiv>
        <div className="botao-voltar">
          <Link href="/">↩ Voltar</Link>
        </div>
        <article>
          <div className="poster">
            {filme.backdrop_path && (
              <img
                src={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`}
                alt={`${filme.title} Poster`}
              />
            )}
          </div>

          {/* <p>
            <strong>Lançamento: </strong>
            {new Date(filme.release_date).toLocaleString("pt-BR", {
              year: "numeric",
            })}
          </p> */}

          <div className="informacoes">
            <h3>{filme.title}</h3>
            <div className="notaeduracao">
              <p className="nota">
                ⭐ {notaArredondada(filme.vote_average)}/10{" "}
              </p>
              <p> 🕐 {filme.runtime} min</p>
            </div>
            <div className="descricao">
              <h4>Descrição:</h4>
              <br />
              <br />
              <p>
                {filme.overview ? filme.overview : "Descrição não disponível."}
              </p>
            </div>
          </div>
        </article>
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  text-align: center;
  color: white;

  h3 {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 2.5rem;
    font-weight: 800;
  }

  .notaeduracao {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .nota {
  }

  .descricao {
    padding: 1rem;
    text-align: left;
  }

  .descricao h4 {
    font-weight: bold;
    font-size: 1.5rem;
  }

  article {
    margin-top: 20px;
    position: relative;
  }

  .informacoes {
  }

  .poster img {
    filter: brightness(100%);
    width: 100vw;
  }
  .botao-voltar {
    text-align: start;
  }

  .botao-voltar a {
    background: linear-gradient(
      248deg,
      rgba(250, 149, 22, 1) 15%,
      rgba(254, 54, 5, 1) 100%
    );
    width: 10%;
    color: white;
    padding: 5px 20px;
    border-radius: 20px;
  }

  @media screen and (min-width: 700px) {
    align-items: center;

    .descricao {
      width: 50%;
      font-size: 1.5rem;
    }

    strong {
      font-size: 1.7rem;
    }
  }
`;
