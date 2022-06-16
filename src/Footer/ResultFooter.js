import React from "react";
import styled from "styled-components";
import retryButt from "../images/image 1.png";
import { RetryButton } from "Button/FooterButton";
import teacherimg from "../images/선생님.png";
import { Link } from "react-router-dom";

const ResultFooterCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
`;

export function ResultFooter() {
  return (
    <ResultFooterCont>
      <img src={teacherimg} alt="teacherimg" />
      <Link to="/">
        <RetryButton />
      </Link>
    </ResultFooterCont>
  );
}
