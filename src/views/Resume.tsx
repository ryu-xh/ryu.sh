import React from "react";
import { Scrollbar } from "smooth-scrollbar-react";
import { useTranslation } from "react-i18next";
import Typewriter from 'typewriter-effect';
import styled from "styled-components";

import Coffee from "../assets/coffee.jpg";
import Self from "../assets/self.png";

const Container = styled.div`
  display: block;
`;

const Content = styled.div`
  margin: auto;
  max-width: 768px;
  padding: 100px 1.5rem;
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.3em;
  transition: all 0.3s ease-in-out;
  
  white-space: pre-line;

  @media (min-width: 768px) {
    font-size: 1.8rem;
    line-height: 1.5em;
  }
`;

const ContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0px;
`;

const ProfileIcon = styled.img`
  border-radius: 50%;
  width: 27vw;
  height: 27vw;
  transition: all 0.3s ease-in-out;

  -webkit-user-drag: none;

  @media (min-width: 768px) {
    width: 12em;
    height: 12em;
  }
`;

const Profile = styled.div`
  padding: 30px 0px;
  display: flex;
  flex-direction: column;

  transition: all 0.3s ease-in-out;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;


const Introduce = styled.span`
  flex: 1;  
  font-size: 1rem;
  line-height: 1.7em;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const IntroduceTitle = styled.span`
  font-size: 1.4rem;
  font-weight: 800;
  padding: 0.2rem 2rem 1rem 0px;

  transition: all 0.3s ease-in-out;

  @media (min-width: 768px) {
    font-size: 1.6rem;
    padding-right: 4rem;
  }

`;

const IntroduceDescription = styled.span`
  font-size: 1.2rem;
  white-space: pre-line;

  line-height: 2.3rem;

  display: inline-block;
`;


const CoffeeImage = styled.img`
  padding: 20px 0px;
  width: 100%;
`;



const Resume: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Scrollbar>
      <Container>
        <Content>
          <ContentHeader>
            <Title>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString(`${t("resume.title")}`)
                    .start();
                }}
                options={{
                  autoStart: true,
                  cursor: "|",
                }}
              />
            </Title>
            <ProfileIcon src={Self} alt="me" />
          </ContentHeader>

          <Profile>
            <IntroduceTitle>{t("resume.introduce_title")}</IntroduceTitle>
            <Introduce>
              <IntroduceDescription>{t("resume.introduce_description")}</IntroduceDescription>
              <CoffeeImage src={Coffee} alt="latte" />
            </Introduce>
          </Profile>

          <Profile>
            <IntroduceTitle>{t("resume.experience_title")}</IntroduceTitle>
            <Introduce>
              
              
            </Introduce>
          </Profile>

          <Profile>
            <IntroduceTitle>{t("resume.skill_title")}</IntroduceTitle>
            <Introduce>
              
              
            </Introduce>
          </Profile>

        </Content>
      </Container>
    </Scrollbar>
  );
};

export default Resume;
