import React from "react";
import styledComponents from "styled-components";

const AnimeList = ({ anime }) => {
  return (
    <Container>
     
      <div style={{width:"100%",height:"100%"}}>
      <Link href={anime.url}>  <Img src={anime.image_url} /> </Link>
      </div>

        <Title>{anime.title.length > 20 ? anime.title.substring(0,20): anime.title}</Title>
        <Rank>{anime.rank}</Rank>
  
    </Container>
  );
};

const Container = styledComponents.div`
height:550px; 
margin-top:50px;
display:flex;
justify-content:space-around;
align-items:center;
flex-direction:column;
transition:all 300ms ease-in;
box-shadow:3px 5px 6px rgba(0,0,0,0.34);
background-color:white;
border-radius:10px;
&:hover{
  transform:scale(1.1);
  z-index:800;
}

`;
const Img = styledComponents.img`width:100%;height:400px;object-fit:cover;`;
const Title = styledComponents.h1`font-size:1.75rem;font-family:"Heebo";font-weight:300;`;
const Rank = styledComponents.h4`font-size:1.5rem;padding:10px;`;
const Link = styledComponents.a``
export default AnimeList; 
