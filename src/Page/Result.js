import React from "react";
import styled from "styled-components";
import { UploadBody } from "../Body/UploadBody";
import { HeaderV2 } from "../Header/Header";
import { SubHeader } from "../Header/SubHeader";
import { ResultFooter } from "Footer/ResultFooter";
import { ResultBody } from "Body/ResultBody";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export function ResultPage() {
  return (
    <Container>
      <HeaderV2 />
      <SubHeader />
      <ResultBody />
      <ResultFooter />
    </Container>
  );
}
