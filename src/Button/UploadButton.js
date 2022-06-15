import React from "react";
import styled from "styled-components";
import upload from "../images/업로드버튼.png";
const AnsUploadContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 54px;
  margin-left: 20px;

  background-color: white;
  border: 3px solid #000000;
  border-radius: 6px;
`;

export function AnsUploadButton({ onClickHandler }) {
  return (
    <AnsUploadContainer onClick={onClickHandler}>
      <img src={upload} alt="upload" />
    </AnsUploadContainer>
  );
}
