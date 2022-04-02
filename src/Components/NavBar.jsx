import React, { useState } from "react";
import styledComponents from "styled-components";
import { FaReddit, FaTwitter } from "react-icons/fa";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Container>
      <LeftNavBar>
        <ToggleContainer onClick={() => setToggle(!toggle)}>
          {!toggle ? <GiHamburgerMenu /> : <GiCancel />}
        </ToggleContainer>
        <Ul toggle={toggle} onClick={() => setToggle(!toggle)}>
          <Li>
            <a href="/">Home</a>
          </Li>
          <Li>
            <a href="/">Manga</a>
          </Li>
          <Li>
            <a href="/">Anime</a>
          </Li>
          
          <Li>
            <a href="/">Top</a>
          </Li>
          
          <Li>
            <a href="/">Character</a>
          </Li>
          <Li>
            <a href="/">Movies</a>
          </Li>
        </Ul>
      </LeftNavBar>
      <CenterNavBar>
        <Img
          src={`https://cdn.pixabay.com/photo/2016/08/15/00/50/pokeball-1594373_1280.png`}
        ></Img>
      </CenterNavBar>
      <RightNavBar>
        <IconContain>
          <Icon>
            <FaReddit />
          </Icon>
          <Icon>
            <FaTwitter />
          </Icon>
        </IconContain>
      </RightNavBar>
    </Container>
  );
};

const Container = styledComponents.div`
display:flex;
align-items:center;
justify-content:space-between;
background-color:white;
height:50px;
position:sticky;
width:100%;
color:black;
padding:10px;
box-shadow:3px 5px 5px rgba(0,0,0,0.34);`;

const LeftNavBar = styledComponents.div`position:relative;`;
const CenterNavBar = styledComponents.div``;
const RightNavBar = styledComponents.div``;
const IconContain = styledComponents.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
`;

const Icon = styledComponents.i`
  margin-left:2rem;
  font-size:1.75rem;
  color:gray;
`;
const Img = styledComponents.img`height:70px;width:60px;margin-top:5px;object-fit:cover;`;

const ToggleContainer = styledComponents.div`position:relative`;
const Ul = styledComponents.ul`display:${(props) =>
  props.toggle ? "flex" : "none"};
flex-direction:column;
position:absolute;
left:0%;
margin-top:20px;
min-height:100vh;
background-color:white;
width:300px;`;
const Li = styledComponents.li`list-style:none;
font-size:2rem;
font-family:"Heebo";
display:flex;
align-items:center;
justify-content:center;
a{
  text-decoration:none;
  color:black;
  margin-top:2rem;
}
`;

export default NavBar;
