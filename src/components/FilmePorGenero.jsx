import React from 'react'
import Container from './ui/Container'
import ListaFilmes from './listaFilmes'

export default function FilmePorGenero({generoId, filmes}) {
  return (
    <Container>
        <ListaFilmes filmes={filmes} />
    </Container>
  )
}
