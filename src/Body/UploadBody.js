import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AnsUploadButton } from "../Button/UploadButton";
import { Words } from "../config";
import { useParams, useNavigate } from "react-router";
import { GradingButton } from "../Button/FooterButton";

const UploadBodyContainer = styled.div`
  margin-top: 190px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 133px;
  width: 100%;
`;

const UploadLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 700px;
  font-weight: 300;
  font-size: 40px;
  line-height: 48px;
`;

export function UploadBody({ grade, upload }) {
  const [words, setWords] = useState([]);
  const [fileImageThumb, setFileImageThumb] = useState({
    0: "",
    1: "",
  });
  const [fileImage, setFileImage] = useState([]);
  useEffect(() => {
    let randomWordArray = [];
    let randomIndexArrray = [];
    for (let i = 0; i < 2; i++) {
      let randomIndex = Math.floor(Math.random() * Words[grade].length);
      if (randomIndexArrray.indexOf(randomIndex) === -1) {
        randomIndexArrray.push(randomIndex);
        randomWordArray.push(Words[grade][randomIndex]);
      } else {
        i--;
      }
    }
    setWords(randomWordArray);
  }, []);

  const handleImageUpload = (e, index) => {
    setFileImageThumb({
      ...fileImageThumb,
      [index]: URL.createObjectURL(e.target.files[0]),
    });
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    setFileImage([
      ...fileImage,
      {
        word: words[index],
        image: formData,
        thumbnail: URL.createObjectURL(e.target.files[0]),
      },
    ]);
  };
  const handleButtonClick = (index) => {
    imageInput.current[index].click();
  };
  const imageInput = useRef([]);
  return (
    <UploadBodyContainer>
      {words.length > 0 &&
        words.map((word, index) => (
          <UploadLine key={word}>
            {index + 1}. {word} :{" "}
            {fileImageThumb[index] !== "" ? (
              <img
                src={fileImageThumb[index]}
                style={{ width: "300px", height: "55px", objectFit: "contain" }}
              />
            ) : (
              <>
                <AnsUploadButton
                  onClickHandler={() => handleButtonClick(index)}
                />
                <input
                  ref={(elem) => (imageInput.current[index] = elem)}
                  type="file"
                  accept="image/*"
                  name="file"
                  onChange={(e) => handleImageUpload(e, index)}
                  style={{ display: "none" }}
                />
              </>
            )}
          </UploadLine>
        ))}
      {fileImage.length == 2 && (
        <GradingButton onClick={() => upload(fileImage)} />
      )}
    </UploadBodyContainer>
  );
}
