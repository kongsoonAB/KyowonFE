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
import axios from "axios";
import { API_URL } from "./API";
import { BACK_API_URL } from "./API";
import { DOMAIN_URL } from "./API";
import { BACKEND_URL } from "./API";

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

    const formData = new FormData();
    formData.append("file", test[0].image);
    formData.append("file", test[1].image);
    formData.append("grade", grade);
    formData.append("word1", test[0].word);
    formData.append("word2", test[1].word);

    console.log(formData);
    axios
      .post(`/learn/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result) => {
        console.log(result);
        setResult(result);
        setStep((prev) => prev + 1);
      });

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
