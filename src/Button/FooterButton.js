import React from "react";
import styled from "styled-components";
import retry from "../images/다시하기버튼.png";
import gradeButt from "../images/채점 버튼.png";
const FooterButtonContainer = styled.div`
  margin-bottom: 52px;
  margin-right: 77px;
`;

export function RetryButton() {
  return (
    <FooterButtonContainer>
      <img src={retry} alt="retry" />
    </FooterButtonContainer>
  );
}
export function GradingButton({ onClick }) {
  return (
    <FooterButtonContainer onClick={onClick}>
      <img src={gradeButt} alt="grading" />
    </FooterButtonContainer>
  );
}
