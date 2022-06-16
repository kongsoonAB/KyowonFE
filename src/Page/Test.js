import React from "react";
import styled from "styled-components";
import { UploadBody } from "../Body/UploadBody";
import { HeaderV2 } from "../Header/Header";
import { SubHeader } from "../Header/SubHeader";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router";
import { LoadingBody } from "../Body/LoadingBody";
import { useState } from "react";
import { ResultBody } from "Body/ResultBody";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export function TestPage() {
  const location = useLocation();
  const { name, age, grade } = location.state;
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(null);
  const uploadTest = (test) => {
    //console.log(test); //uploaded image
    setAnswer(test);
    setStep((prev) => prev + 1);

    setTimeout(function () {
      //임시용
      //result herec
      const resultFromBack = [
        {
          detected: "저쩌구",
          correct: true,
        },
        {
          detected: "어쩌구",
          correct: false,
        },
      ];
      setResult(resultFromBack);
      setStep((prev) => prev + 1);
    }, 3000);
    //upload here
    //when finish => setStep((prev) => prev + 1);
  };

  const SwitchTestBody = () => {
    switch (step) {
      case 0:
        return <UploadBody grade={grade} upload={uploadTest} />;
        break;
      case 1:
        return <LoadingBody />;
        break;
      case 2:
        return <ResultBody answer={answer} result={result} />;
      default:
        break;
    }
  };

  return (
    <Container>
      <HeaderV2 grade={grade} />
      <SubHeader name={name} age={age} />
      <SwitchTestBody />
    </Container>
  );
}
