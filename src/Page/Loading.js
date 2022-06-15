import React from "react";
import styled from "styled-components";
import { LoadingBody } from "../Body/LoadingBody";
import { HeaderV2 } from "../Header/Header";
import { SubHeader } from "../Header/SubHeader";
import { useLocation } from "react-router-dom";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export function LoadingPage() {
  return (
    <Container>
      <HeaderV2 />
      <SubHeader />
      <LoadingBody />
    </Container>
  );
}
