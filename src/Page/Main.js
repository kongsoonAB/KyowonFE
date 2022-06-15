import React from "react";
import styled from "styled-components";
import { Header } from "Header/Header";
import { MainBody } from "Body/MainBody";
import { Mainfooter } from "Footer/Mainfooter";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export function MainPage() {
  return (
    <MainContainer>
      <Header />
      <MainBody />
      <Mainfooter />
    </MainContainer>
  );
}
