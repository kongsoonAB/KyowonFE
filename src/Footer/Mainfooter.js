import React from "react";
import styled from "styled-components";
import image from "../images/image 1.png";
const FooterContainer = styled.div``;

export function Mainfooter() {
  return (
    <FooterContainer>
      <img src={image} alt="mainfooter" />
    </FooterContainer>
  );
}
