import React from "react";
import {Scrollbar} from "smooth-scrollbar-react";
import {useTranslation} from "react-i18next";
import Typewriter from "typewriter-effect";
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

const SubProfile = styled.div`
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
  width: 110px;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 0.2rem 0px 1rem 0px;

  transition: all 0.3s ease-in-out;

  white-space: pre-line;

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

const SubIntroduceTitle = styled.span`
  width: 80px;
  font-size: 1rem;
  font-weight: 400;

  transition: all 0.3s ease-in-out;

  white-space: pre-line;

  @media (min-width: 768px) {
    width: 110px;
    font-size: 1.1rem;
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

const ExperienceContainer = styled.div`
  padding: 30px 0px;
`;

const ExperienceSubContainer = styled(SubProfile)`
  padding: 10px 0px;
  flex-direction: row;
`;

const CompanyDescription = styled.div`
flex: 1;
`;

const Company = styled.div`
  font-size: 1rem;
  font-weight: 600;
  align-items: center;
  display: flex;

  transition: all 0.3s ease-in-out;

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Position = styled.span`
  padding-left: 0.3rem;
  font-size: 0.8rem;
  font-weight: 400;

  transition: 0.3s all ease-in-out;

  @media (min-width: 768px) {
    padding-left: 0.8rem;
    font-size: 0.9rem;
  }
`;

const Status = styled(Position)`

`;

const SkillContainer = styled.div`
  padding: 30px 0px;
`;

const SkillUl = styled.ul`
  margin: 0px;
  padding: 0px;
`;

const SkillList = styled.li`
  font-size: 1.1rem;
  padding: 5px 0px;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Resume: React.FC = () => {
  const {t} = useTranslation();

  return (
    <Scrollbar>
      <Container>
        <Content>
          <ContentHeader>
            <Title>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString(`${t("resume.title")}`).start();
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
              <IntroduceDescription>
                {t("resume.introduce_description")}
              </IntroduceDescription>
              <CoffeeImage src={Coffee} alt="latte" />
            </Introduce>
          </Profile>

          <ExperienceContainer>
            <IntroduceTitle>{t("resume.experience_title")}</IntroduceTitle>
            <ExperienceSubContainer>
              <SubIntroduceTitle>
                2021.11 ~ <br />
                {t("resume.experience_working")}
              </SubIntroduceTitle>
              <div>
                <Company>
                  {t("resume.company_team_mypacer")}<Position>{t("resume.position_fullstack_engineer")}</Position>
                </Company>
                <div>
                  주저리
                  <br />
                  주저리
                  <br />
                  주저리
                  <br />
                  주저리
                  <br />
                  주저리
                  <br />
                  주저리
                  <br />
                </div>
              </div>
            </ExperienceSubContainer>
            <ExperienceSubContainer>
              <SubIntroduceTitle>
                2021.05 ~ <br />
                2021.10
              </SubIntroduceTitle>
              <CompanyDescription>
                <Company>
                  {t("resume.company_team_unstablers")}<Position>{t("resume.position_backend_engineer")}</Position>
                </Company>
                <div>
                  주저리
                  <br />
                  주저리
                  <br />
                  주저리
                  <br />
                  주저리
                  <br />
                  주저리
                  <br />
                </div>
              </CompanyDescription>
            </ExperienceSubContainer>
            <ExperienceSubContainer>
              <SubIntroduceTitle>
                2020.01 ~ <br />
                2021.04
              </SubIntroduceTitle>
              <CompanyDescription>
                <Company>
                  {t("resume.company_starbucks")}<Position>{t("resume.position_barista")}</Position>
                </Company>
                <div>
                  주저리
                  <br />
                  주저리
                  <br />
                  주저리
                  <br />
                  주저리
                  <br />
                  주저리
                  <br />
                </div>
              </CompanyDescription>
            </ExperienceSubContainer>
          </ExperienceContainer>

          <ExperienceContainer>
            <IntroduceTitle>
              {t("resume.educational_experience_title")}
            </IntroduceTitle>
            <ExperienceSubContainer>
              <SubIntroduceTitle>
                2015.03 ~ <br />
                2018.02
              </SubIntroduceTitle>
              <div>
                <Company>
                  {t("resume.educational_experience_highschool_name")}
                  <Position>
                    {t("resume.educational_experience_highschool_object")}
                  </Position>
                  <Status>
                    {t("resume.educational_experience_graduation")}
                  </Status>
                </Company>
              </div>
            </ExperienceSubContainer>
            <ExperienceSubContainer>
              <SubIntroduceTitle>
                2018.03 ~ <br />
                2020.02
              </SubIntroduceTitle>
              <div>
                <Company>
                  {t("resume.educational_experience_college_name")}
                  <Position>
                    {t("resume.educational_experience_college_object")}
                  </Position>
                  <Status>
                    {t("resume.educational_experience_graduation")}
                  </Status>
                </Company>
              </div>
            </ExperienceSubContainer>
          </ExperienceContainer>

          <SkillContainer>
            <IntroduceTitle>{t("resume.skill_title")}</IntroduceTitle>
            <SubProfile>
              <SubIntroduceTitle>
                {t("resume.skill_frontend_title")}
              </SubIntroduceTitle>
              <SkillUl>
                <SkillList>React (Typescript)</SkillList>
                <SkillList>React Native (Typescript)</SkillList>
              </SkillUl>
            </SubProfile>
            <SubProfile>
              <SubIntroduceTitle>
                {t("resume.skill_backend_title")}
              </SubIntroduceTitle>
              <SkillUl>
                <SkillList>Django (Python)</SkillList>
                <SkillList>Node (Javascript)</SkillList>
              </SkillUl>
            </SubProfile>
            <SubProfile>
              <SubIntroduceTitle>
                {t("resume.skill_client_title")}
              </SubIntroduceTitle>
              <SkillUl>
                <SkillList>Windows Presentation Foundation(C#)</SkillList>
              </SkillUl>
            </SubProfile>
          </SkillContainer>
        </Content>
      </Container>
    </Scrollbar>
  );
};

export default Resume;
