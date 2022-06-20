import React from "react";
import {t} from "i18next";
import styled from "styled-components";

import Coffee from "../assets/coffee.jpg";

const Container = styled.div`
  display: block;
`;

const Content = styled.div`
  margin: auto;
  max-width: 768px;
  padding: 1rem;
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const AkaName = styled(Title)`
  font-size: 1.2rem;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Profile = styled.div``;

const Resume: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title>염석현</Title>
        <AkaName>(aka. RYU)</AkaName>
        <Profile></Profile>
      </Content>
    </Container>
  );
};

export default Resume;
