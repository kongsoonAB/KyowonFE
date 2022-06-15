import React from "react";
import styled from "styled-components";
import { UploadBody } from "../Body/UploadBody";
import { HeaderV2 } from "../Header/Header";
import { SubHeader } from "../Header/SubHeader";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router";
import { LoadingBody } from "../Body/LoadingBody";
import { useState } from "react";

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

  const uploadTest = (test) => {
    console.log(test); //uploaded image
    setStep((prev) => prev + 1);

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
