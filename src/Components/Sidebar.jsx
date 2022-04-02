import React, { useState } from "react";
import styledComponents from "styled-components";
const Sidebar = ({setSearchValue}) => {
  const [searchInput, setSearchInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setSearchValue(searchInput);
    setSearchInput("");
  };
  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <Input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        ></Input>
      </Form>
      
    </Container>
  );
};
const Container = styledComponents.div`flex:2;`;
const Input = styledComponents.input`padding:10px;
border-radius:10px;
font-size:1.2rem;
font-family:monospace;
border:0.25px solid black;
`;

const Form = styledComponents.form`display:flex;
align-items:center;
justify-content:center;
margin-top:2rem;

`;
export default Sidebar;
