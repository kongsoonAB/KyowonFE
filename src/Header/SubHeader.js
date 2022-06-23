import React from "react";
import styled from "styled-components";

const SubHeaderContainer = styled.div`
  width: 100%;
  height: 123px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border: 2px solid #3874b6;
  filter: drop-shadow(0px 6px 4px rgba(0, 0, 0, 0.25));
  border-radius: 15px;
  padding: 27px 20px;
  margin: 25px;
`;

const SubjectStyle = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-family: "IBM Plex Sans KR";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;

  color: #000000;
`;

const StudentInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  font-family: "IBM Plex Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  padding-right: 40px;
  gap: 40px;
`;
const StudentInfoLabel = styled.div`
  height: 100%;
`;

const Divider = styled.div`
  width: 0;
  height: 100%;

  border: 2px solid #3874b6;
`;

export function SubHeader({ name, age }) {
  return (
    <SubHeaderContainer>
      <SubjectStyle>국어</SubjectStyle>
      <Divider />
      <StudentInfo>
        <StudentInfoLabel>이름 : {name}</StudentInfoLabel>
        <StudentInfoLabel> 나이 : {age}</StudentInfoLabel>
      </StudentInfo>
    </SubHeaderContainer>
  );
}
