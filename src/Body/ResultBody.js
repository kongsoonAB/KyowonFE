import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AnsUploadButton } from "../Button/UploadButton";
import { GradingButton } from "../Button/FooterButton";
import correct from "../images/correct.png";
import wrong from "../images/wrong.png";
import { ResultFooter } from "Footer/ResultFooter";
const UploadBodyContainer = styled.div`
  margin-top: 190px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  width: 100%;
`;

const UploadLine = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 700px;
  font-weight: 300;
  font-size: 40px;
  line-height: 48px;
`;

const DetResult = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-top: 30px;
  margin-bottom: 80px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;

  color: ${(props) => (props.isCorrect ? "black" : "red")};
`;

const AnswerMark = styled.img`
  position: absolute;
  top: -30px;
  left: 0px;
  z-index: 1;
`;

export function ResultBody({ answer, result }) {
  const GetAnswerMark = ({ isCorrect }) => {
    if (isCorrect) {
      return <AnswerMark src={correct} />;
    } else {
      return <AnswerMark src={wrong} />;
    }
  };
  return (
    <UploadBodyContainer>
      <UploadLine>
        <GetAnswerMark isCorrect={result[0].correct} />
        1. {answer[0].word} :
        <img
          src={answer[0].thumbnail}
          style={{ width: "300px", height: "55px", objectFit: "contain" }} //몰?루
        />
      </UploadLine>
      <DetResult isCorrect={result[0].correct}>
        {"  "}
        <span style={{ color: "black", fontWeight: "600" }}>인식결과 :</span>
        {"  "}
        {result[0].detected}
      </DetResult>
      <UploadLine>
        <GetAnswerMark isCorrect={result[1].correct} />
        2. {answer[1].word} :
        <img
          src={answer[1].thumbnail}
          style={{ width: "300px", height: "55px", objectFit: "contain" }}
        />
      </UploadLine>
      <DetResult isCorrect={result[1].correct}>
        <span style={{ color: "black", fontWeight: "600" }}>인식결과 : </span>
        {"  "}
        {result[1].detected}
      </DetResult>
      <ResultFooter />
    </UploadBodyContainer>
  );
}
