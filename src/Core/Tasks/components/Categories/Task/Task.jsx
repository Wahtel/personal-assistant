import React from "react";
import styled from "@emotion/native";
import { StyleSheet } from "react-native";
import { ArrowIcon } from "src/ui/icons";
import { LinearGradient } from 'expo-linear-gradient';
import { LogoRenderer } from "./LogoRenderer";

const Container = styled.View`
  display: flex;
  width: 170px;
  height: 120px;
  border-radius: 12px;
  padding: 16px 13px 18px 13px;
  gap: 4px;
  background-color: #1C1C1E;
  position: relative;
  margin: 10px;
`;

const StyledView = styled.View`
  flex: 1;
  // Adjust this based on your layout needs:
  width: 100%;
  height: 100%;
  position: relative;
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
  const { title, description, icon } = task;
  return (
    <Container>
      {/* <LinearGradient
        colors={['#8959C733', 'transparent']}
        style={styles.container}
        start={{ x: 1, y: 1 }}
        end={{ x: 0.1, y: 0.3 }}
      /> */}
      <TitleContainer>
        <LogoRenderer name={icon} />
        <Title>{title}</Title>
      </TitleContainer>
      <DescriptionContainer>
        <Description>{description}</Description>
      </DescriptionContainer>
      <StyledIcon />
    </Container>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 12,
  },
});
