import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { Link, useParams } from "react-router-dom";
import FixView from "../../components/common/templetes/fixView/FixView";

const FortuneTitle = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  font-size: 20px;
  top: 20%;
  color: #ffffff;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Lotus = styled.img`
  display: flex;
  position: absolute;
  top: 50%;
  width: 302px;
`;

const fadein = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const LotusLight = styled.img`
  position: absolute;
  top: 50%;
  width: 302px;
  animation: ${({ isVisible }) =>
    isVisible
      ? css`
          ${fadein} 0.5s linear
        `
      : "none"};
`;

function FortuneIntroPage() {
  const [isLotusLightVisible, setIsLotusLightVisible] = useState(false);
  const { detailId } = useParams();

  useEffect(() => {
    if (isLotusLightVisible) {
      setTimeout(() => {
        window.location.href = `/fortuneLeaf/${detailId}`;
      }, 2000);
    }
  }, [isLotusLightVisible]);

  const handleLotusClick = () => {
    setIsLotusLightVisible(true);
  };

  return (
    <FixView>
      <FortuneTitle>행운의 연꽃잎을 뽑아보세요</FortuneTitle>
      <ImgContainer>
        <Lotus src="/img/Fortune/lotus.png" onClick={handleLotusClick} />
        {isLotusLightVisible && (
          <LotusLight
            src="/img/Fortune/lightlotus.png"
            isVisible={isLotusLightVisible}
          />
        )}
      </ImgContainer>
    </FixView>
  );
}

export default FortuneIntroPage;
