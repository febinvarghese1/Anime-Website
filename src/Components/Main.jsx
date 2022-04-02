import React from "react";
import styledComponents from "styled-components";

import AnimeList from "./AnimeList";
const Main = ({ topAnime }) => {
  return (
    <Container>
      <GridContainer>
        {topAnime.map((anime) => (
          <AnimeList key={anime.mal_id} anime={anime} />
        ))}
      </GridContainer>
    </Container>
  );
};

const Container = styledComponents.div`flex:10;
box-shadow:4px 4px 12px rgba(0,0,0,1);
`;

const GridContainer = styledComponents.div`
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap:50px;
  margin:10px;
  padding:5px;
`;
export default Main;
