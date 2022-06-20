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
  padding: 100px 2rem;
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.3em;
  transition: all 0.3s ease-in-out;

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
  padding: 20px 0px;
`;

const ProfileIcon = styled.img`
  border-radius: 50%;
  width: 5.5em;
  height: 5.5em;
  transition: all 0.3s ease-in-out;

  @media (min-width: 768px) {
    width: 12em;
    height: 12em;
  }
`;

const Profile = styled.div`
  padding: 120px 0px;
  display: flex;
  flex-direction: row;
`;


const Introduce = styled.span`
  flex: 1;  
  font-size: 1rem;
  line-height: 1.7em;

  word-break: keep-all;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const IntroduceTitle = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  padding-right: 2rem;

  transition: all 0.3s ease-in-out;

  @media (min-width: 768px) {
    font-size: 1.6rem;
  padding-right: 4rem;
  }

`;


const CoffeeImage = styled.img`
  padding: 20px 0px;
  width: 100%;
  word-break: keep-all;
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
              저는 리액트와 리액트 네이티브를 사용한 프론트엔드 개발과 장고를 사용한 백엔드 개발을 좋아하며, 항상 모두가 보기 좋은 코드를 작성하는 것을 좋아합니다.<br />
              함께 커피 한잔 마시면서 이야기를 하고 싶어요.
              <CoffeeImage src={Coffee} alt="cafe latte" />
            </Introduce>


          </Profile>
        </Content>
      </Container>
    </Scrollbar>
  );
};

export default Resume;
