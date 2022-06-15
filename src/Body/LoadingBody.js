import React from "react";
import styled from "styled-components";
import scan from "../images/스캔.gif";
import loading from "../images/loading.gif";
import { useLocation } from "react-router";
const LoadingBodyCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  margin-bottom: 103px;
`;

export function LoadingBody() {
  return (
    <LoadingBodyCont>
      <img src={scan} alt="scanning" />
      <img src={loading} alt="loading" />
    </LoadingBodyCont>
  );
}
