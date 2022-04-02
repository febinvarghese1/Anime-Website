import React from "react";
import styledComponents from "styled-components";
import Main from "./Main";
import Sidebar from "./Sidebar";
const Hero = ({ setSearchValue, topAnime }) => {
  return (
    <Container>
      <Sidebar setSearchValue={setSearchValue}/>
      <Main  topAnime={topAnime} />
      
    </Container>
  );
};

const Container = styledComponents.div`margin-top:8px;
min-height:100vh;
display:flex;`;




export default Hero;
