import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Grade } from "../config";
import startButton from "../images/시작하기버튼.png";
const BodyContainer = styled.div`
  margin-top: 120px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  gap: 40px;
`;

const SubBodyCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;
`;

const InputBodyCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 16px;
  font-weight: 500;
  font-size: 40px;
  line-height: 46px;
`;

const BodyInputEntry = styled.input`
  box-sizing: border-box;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;

  width: 306px;
  height: 46px;

  background: #f8f8f7;
  border: 1px solid #000000;
  border-radius: 6px;

  padding: 0 10px;
`;

const GradeSelector = styled.select`
  box-sizing: border-box;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;

  width: 306px;
  height: 46px;

  background: #f8f8f7;
  border: 1px solid #000000;
  border-radius: 6px;

  padding: 0 10px;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background-size: 30px;
  background: url("../images/Polygon.png") no-repeat 95% 50%;
`;

const ImageButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export function MainBody() {
  let navigate = useNavigate();

  const [inputs, setInputs] = useState({
    name: "",
    age: "",
    grade: Grade[0],
  });

  const { name, age, grade } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };
  const goUpload = () => {
    {
      console.log(name, age, grade);
      if (name !== "" && age !== "" && grade !== "")
        navigate(`/test`, {
          state: { name: name, age: age, grade: grade },
        });
      else {
        alert("정보를 입력해주세요.");
      }
    }
  };

  return (
    <BodyContainer>
      <SubBodyCont>
        <InputBodyCont>
          {"이름 :"}
          <BodyInputEntry name="name" onChange={onChange} value={name} />
        </InputBodyCont>
        <InputBodyCont>
          {"나이 :"}
          <BodyInputEntry
            name="age"
            type="number"
            onChange={onChange}
            value={age}
          />
        </InputBodyCont>
        <InputBodyCont>
          {"등급 :"}
          <GradeSelector name="grade" onChange={onChange}>
            {Grade.map((grade, key) => (
              <option key={key} value={grade}>
                {grade}
              </option>
            ))}
          </GradeSelector>
        </InputBodyCont>
      </SubBodyCont>
      <ImageButton onClick={goUpload}>
        <img src={startButton} alt="startButton" />
      </ImageButton>
    </BodyContainer>
  );
}
