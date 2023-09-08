import React from "react";
import styled from "@emotion/native";
import { ImageRenderer } from "src/Core/Tasks/components/Categories/Task/ImageRenderer";

const Container = styled.SafeAreaView`
  // flex: 1;
  // border: 1px solid red;
  flex-direction: row;
  height: 57px;
  width: 100%;
  // gap-left: 16px;
`;

const IconContainer = styled.View`
  // border: 1px solid green;
  width: 55px;
  display: flex;
  align-items: center;
  // justify-content: flex-end;
  justify-content: center;
  // background-color: red;
  flex-direction: row;
`;

const DataContainer = styled.View`
  // border: 1px solid blue;
  display: flex;
  flex: 1;
  margin-top: 8px;
`;

const Title = styled.Text`
  //styleName: Body/Regular;
  font-family: "SF-Pro-Text-Regular";
  font-size: 17px;
  line-height: 22px;
  color: #FFFFFF;
`;

const Description = styled.Text`
  font-family: "SF-Pro-Text-Regular";
  font-size: 12px;
  line-height: 16px;
  color: #EBEBF599;
  margin-top: 2px;
`;

const DescriptionWrapper = styled.View`
  display: flex;
  margin-right: 16px;
`;


export const ChatHistory = () => {
  return (
    <Container>
     <IconContainer>
      <ImageRenderer name="instagram" />
     </IconContainer>
     <DataContainer>
      <Title>Instagram posts NG</Title>
      <DescriptionWrapper>
        <Description numberOfLines={1} ellipsizeMode='tail'>How to create an Instagram post to promote an awesome post you have to check this out!</Description>
      </DescriptionWrapper>
     </DataContainer>
    </Container>
  );
};
