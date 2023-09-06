import React from "react";
import styled from "@emotion/native";
import { ImageRenderer } from "./ImageRenderer";
import { ArrowIcon } from "src/ui/icons";

const Container = styled.View`
  display: flex;
  width: 170px;
  height: 120px;
  border-radius: 12px;
  padding: 16px 13px 18px 13px;
  gap: 4px;
  background-color: #1C1C1E;
  // background: linear-gradient(0deg, #1C1C1E, #1C1C1E),
  //   radial-gradient(86.1% 163.44% at 94.62% 97.56%, rgba(137, 89, 199, 0.2) 0%, rgba(0, 0, 0, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
`;

const TitleContainer = styled.View`
  // background-color: green;
  display: flex;
  flex-direction: row;
  // border: 1px solid red;
  align-items: center;
`;

const Title = styled.Text`
  font-family: "SF-Pro-Text-Semibold";
  font-size: 15px;
  line-height: 17px;
  letter-spacing: 0.3499999940395355px;
  text-align: left;
  margin-left: 6px;
  color: #FFFFFF;
`;

const DescriptionContainer = styled.View`
  // border: 1px solid blue;
  display: flex;
  margin-top: 7px;
`;

const Description = styled.Text`
  font-family: "SF-Pro-Text-Regular";
  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.07800000160932541px;
  text-align: left;
  color: #BCBCBC;
`;

const StyledIcon = styled(ArrowIcon)`
  position: absolute;
  right: 13px;
  bottom: 18px;
`;

export const Task = ({ task }) => {
  const { title, description } = task;
  return (
    <Container>
      <TitleContainer>
        <ImageRenderer name={"facebook"} />
        <Title>{title}</Title>
      </TitleContainer>
      <DescriptionContainer>
        <Description>{description}</Description>
      </DescriptionContainer>
      <StyledIcon />
    </Container>
  );
};
