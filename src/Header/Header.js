import React from "react";
import styled from "styled-components";
import kyowon from "../images/교원 로고.png";
import handu from "../images/핸듀 로고.png";
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 38px;

  width: 100%;
  height: 80px;
`;

export function Header() {
  return (
    <HeaderContainer>
      <img src={kyowon} alt="kyowon" />
      <img src={handu} alt="handu" />
    </HeaderContainer>
  );
}

const LHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 31px;
  height: 100%;
`;
const Gradebox = styled.div`
  width: 70px;
  height: 48px;
  display: flex;
  justify-content: center;
  border: 3px solid #000000;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 4px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;

  color: #000000;
`;

export function HeaderV2({ grade }) {
  return (
    <HeaderContainer>
      <LHeaderContainer>
        <img src={kyowon} alt="kyowon" />
        <Gradebox>{grade}</Gradebox>
      </LHeaderContainer>
      <img src={handu} alt="handu" />
    </HeaderContainer>
  );
}
