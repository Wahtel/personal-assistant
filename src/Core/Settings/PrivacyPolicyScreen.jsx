import React from 'react';
import styled from '@emotion/native';

import BackButton from "./components/BackButton/BackButton";

export default function PrivacyPolicyScreen(props) {
  const {navigation} = props;

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()}/>
      <PageTitle>Privacy Policy</PageTitle>
      <PrivacyPolicyScreenContainer contentContainerStyle={{
        rowGap: 20
      }}>
        <PageContentText>
          1. Registration and Access{'\n'}{'\n'}

          You must be at least 13 years old to use the Services. If you are under 18 you must have your parent or legal
          guardian’s permission to use the Services. If you use the Services on behalf of another person or entity, you
          must have the authority to accept the Terms on their behalf. You must provide accurate and complete
          information to register for an account. You may not make your access credentials or account available to
          others outside your organization, and you are responsible for all activities that occur using your
          credentials.
          {'\n'}{'\n'}

          2. Usage Requirements.
          {'\n'}{'\n'}

          (a) Use of Services. You may access, and we grant you a non-exclusive right to use, the Services in accordance
          with these Terms. You will comply with these Terms and all applicable laws when using the Services. We and our
          affiliates own all rights, title, and interest in and to the Services.

          {'\n'}{'\n'}

          (b) Feedback. We appreciate feedback, comments, ideas, proposals and suggestions for improvements. If you
          provide any of these things, we may use it without restriction or compensation to you.

          {'\n'}{'\n'}

          (c) Restrictions. You may not (i) use the Services in a way that infringes, misappropriates or violates any
          person’s rights; (ii) reverse assemble, reverse compile, decompile, translate or otherwise attempt to discover
          the source code or underlying components of models, algorithms, and systems of the Services (except to the
          extent such restrictions are contrary to applicable law); (iii) use output from the Services to develop models
          that compete with OpenAI; (iv) except as permitted through the API, use any automated or programmatic method
          to extract data or output from the Services, including scraping, web harvesting, or web data extraction; (v)
          represent that output from the Services was human-generated when it is not or otherwise violate our Usage
          Policies; (vi) buy, sell, or transfer API keys without our prior consent; or (vii), send us any personal
          information of children under 13 or the applicable age of digital consent. You will comply with any rate
          limits and other requirements in our documentation. You may use Services only in geographies currently
          supported by OpenAI.
          (d) Third Party Services. Any third party software, services, or other products you use in connection with the
          Services are subject to their own terms, and we are not responsible for third party products.
        </PageContentText>
      </PrivacyPolicyScreenContainer>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  display: flex;
  align-items: center;
  flex: 1;
  background-color: #0a0c0b;
`;

const PrivacyPolicyScreenContainer = styled.ScrollView`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PageTitle = styled.Text`
  width: 90%;
  margin: 20px 0;
  font-size: 34px;
  font-family: "SF-Pro-Text-Bold";
  font-weight: 600;
  color: #ffffff;
`;

const PageContentText = styled.Text`
  font-size: 15px;
  font-family: "SF-Pro-Text-Regular";
  font-weight: 400;
  color: #ffffff;
`;
