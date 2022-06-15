import React from "react";
import styled from "styled-components";
import { LoadingBody } from "../Body/LoadingBody";
import { HeaderV2 } from "../Header/Header";
import { SubHeader } from "../Header/SubHeader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export function GradingPage() {
  return (
    <Container>
      <HeaderV2 />
      <SubHeader />
    </Container>
  );
}
