import React from "react";
import {Scrollbar} from "smooth-scrollbar-react";
import {useTranslation} from "react-i18next";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

import Coffee from "../assets/coffee.webp";
import Self from "../assets/self.webp";
import dayjs from "dayjs";

const Container = styled.div`
  display: block;
`;

const Content = styled.div`
  margin: auto;
  max-width: 768px;
  padding: 100px 2.5rem;
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
  padding: 50px 0;
`;

const ProfileIcon = styled.img`
  border-radius: 50%;
  width: 30vw;
  height: 30vw;
  transition: all 0.3s ease-in-out;

  -webkit-user-drag: none;

  @media (min-width: 768px) {
    width: 16em;
    height: 16em;
  }
`;

const Profile = styled.div`
  padding: 30px 0;
  display: flex;
  flex-direction: column;

  transition: all 0.3s ease-in-out;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const SubProfile = styled.div`
  padding: 30px 0;
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
  line-height: 1.4em;

  @media (min-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.6em;
  }
`;

const IntroduceTitle = styled.span`
  width: 130px;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 0.2rem 0 1rem 0;

  transition: all 0.3s ease-in-out;

  white-space: pre-line;

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

const SubIntroduceTitle = styled.span`
  padding-top: 0.2rem;
  width: 100px;
  font-size: 1rem;
  font-weight: 400;
  padding-bottom: 0.3rem;

  transition: all 0.3s ease-in-out;

  white-space: pre-line;

  @media (min-width: 768px) {
    width: 130px;
    font-size: 1.1rem;
  }
`;

const IntroduceDescription = styled.span`
  font-size: 1rem;
  white-space: pre-line;

  line-height: 1.4em;

  &&:lang(ko) {
    word-break: keep-all;
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.6em;
  }
`;

const CoffeeImage = styled.img`
  padding: 20px 0;
  width: 100%;
`;

const ExperienceContainer = styled.div`
  padding: 30px 0;
`;

const ExperienceSubContainer = styled(SubProfile)`
  padding: 15px 0 20px 0;
  flex-direction: row;
`;

const Company = styled.div`
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-bottom: 0.5rem;

  transition: all 0.3s ease-in-out;

  @media (min-width: 768px) {
    align-items: center;
    flex-direction: row;
    font-size: 1.3rem;
  }
`;

const Position = styled.span`
  font-size: 0.8rem;
  font-weight: 400;

  transition: 0.3s all ease-in-out;

  @media (min-width: 768px) {
    padding-left: 0.3rem;
    padding-left: 0.8rem;
    font-size: 0.9rem;
  }
`;

const SkillContainer = styled.div`
  padding: 30px 0;
`;

const SkillUl = styled.ul`
  margin: 0;
  padding-left: 1.25rem;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

const SkillList = styled.li`
  font-size: 1.1rem;
  padding-bottom: 10px;
  align-items: center;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const SubSkill = styled.span`
  font-size: 1rem;
  flex: 1;
`;

const AwardContainer = styled.div`
  padding: 30px 0;
`;

const Link = styled.a`
  color: #fff;
  text-decoration: underline;

  transition: all 0.3s ease-out;

  &:hover {
    color: #111;
    background-color: #fff;
    text-decoration: none;
  }
`;

const OthersContainer = styled.div`
  padding: 30px 0;
`;

const GithubLink = styled.a`
  color: #fff;
  text-decoration: underline;

  transition: all 0.3s ease-out;

  &:hover {
    color: #111;
    background-color: #fff;
    text-decoration: none;
  }
`;

const Resume: React.FC = () => {
  const {t} = useTranslation();

  const renderExperience = () => {
    return (
      <ExperienceContainer>
        <IntroduceTitle>{t("resume.experience_title")}</IntroduceTitle>
{/*         <ExperienceSubContainer>
          <SubIntroduceTitle>
            2022.08 ~ <br />
            {t("resume.experience_working")} <br />(
            {t("resume.period_years_months", {
              years: dayjs().diff("2022-08-08", "years"),
              months: dayjs(
                dayjs().diff(dayjs("2022-08-08"), "millisecond")
              ).month(),
            })}
            )
          </SubIntroduceTitle>
          <Introduce>
            <Company>
              <Link href="https://evmodu.kr">
                {t("resume.company_scalardata")}
              </Link>
              <Position>{t("resume.position_fullstack_engineer")}</Position>
            </Company>
            <IntroduceDescription>
              {t("resume.company_scalardata_description")}
            </IntroduceDescription>
          </Introduce>
        </ExperienceSubContainer> */}
        <ExperienceSubContainer>
          <SubIntroduceTitle>
            2022.08 ~ <br />
            2025.01 <br />(
            {t("resume.period_years_months", {
              years: dayjs("2025-01-08").diff(dayjs("2022-08-08"), "year"),
              months: dayjs(
                dayjs("2025-01-08").diff(dayjs("2022-08-08"), "millisecond")
              ).month(),
            })}
            )
          </SubIntroduceTitle>
          <Introduce>
            <Company>
              <Link href="https://evmodu.kr">
                {t("resume.company_scalardata")}
              </Link>
              <Position>{t("resume.position_fullstack_engineer")}</Position>
            </Company>
            <IntroduceDescription>
              {t("resume.company_scalardata_description")}
            </IntroduceDescription>
          </Introduce>
        </ExperienceSubContainer>
        <ExperienceSubContainer>
          <SubIntroduceTitle>
            2021.11 ~ <br />
            2022.08 <br />(
            {t("resume.preiod_months", {
              months: dayjs("2022-08-05").diff(dayjs("2021-11-01"), "month"),
            })}
            )
          </SubIntroduceTitle>
          <Introduce>
            <Company>
              <Link href="https://www.palzak.co">
                {t("resume.company_palzak_corporation")}
              </Link>
              <Position>{t("resume.position_fullstack_engineer")}</Position>
            </Company>
            <IntroduceDescription>
              {t("resume.company_team_mypacer_description")}
            </IntroduceDescription>
          </Introduce>
        </ExperienceSubContainer>
        <ExperienceSubContainer>
          <SubIntroduceTitle>
            2021.05 ~ <br />
            2021.10 <br />(
            {t("resume.preiod_months", {
              months: dayjs("2021-10-31").diff(dayjs("2021-05-01"), "month"),
            })}
            )
          </SubIntroduceTitle>
          <Introduce>
            <Company>
              <Link href="https://unstabler.pl">
                {t("resume.company_team_unstablers")}
              </Link>
              <Position>{t("resume.position_backend_engineer")}</Position>
            </Company>
            <IntroduceDescription>
              {t("resume.company_team_unstabler_description")}
            </IntroduceDescription>
          </Introduce>
        </ExperienceSubContainer>
        <ExperienceSubContainer>
          <SubIntroduceTitle>
            2020.01 ~ <br />
            2021.04 <br />(
            {t("resume.period_years_months", {
              years: dayjs("2021-04-30").diff(dayjs("2020-01-01"), "years"),
              months: dayjs(
                dayjs("2021-04-30").diff(dayjs("2020-01-01"), "millisecond")
              ).month(),
            })}
            )
          </SubIntroduceTitle>
          <Introduce>
            <Company>
              {t("resume.company_starbucks")}
              <Position>{t("resume.position_barista")}</Position>
            </Company>
            <IntroduceDescription>
              {t("resume.company_starbucks_description")}
            </IntroduceDescription>
          </Introduce>
        </ExperienceSubContainer>
      </ExperienceContainer>
    );
  };

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

          {renderExperience()}

          <ExperienceContainer>
            <IntroduceTitle>
              {t("resume.educational_experience_title")}
            </IntroduceTitle>
            <ExperienceSubContainer>
              <SubIntroduceTitle>
                2018.03 ~ <br />
                2020.02
              </SubIntroduceTitle>
              <Introduce>
                <Company>
                  {t("resume.educational_experience_college_name")}
                  <Position>
                    {t("resume.educational_experience_college_object")}
                  </Position>
                </Company>
                <IntroduceDescription>
                  {t("resume.educational_experience_college_description")}
                </IntroduceDescription>
              </Introduce>
            </ExperienceSubContainer>

            <ExperienceSubContainer>
              <SubIntroduceTitle>
                2015.03 ~ <br />
                2018.02
              </SubIntroduceTitle>
              <Introduce>
                <Company>
                  {t("resume.educational_experience_highschool_name")}
                  <Position>
                    {t("resume.educational_experience_highschool_object")}
                  </Position>
                </Company>
              </Introduce>
            </ExperienceSubContainer>
          </ExperienceContainer>

          <SkillContainer>
            <IntroduceTitle>{t("resume.skill_title")}</IntroduceTitle>
            <SubProfile>
              <SubIntroduceTitle>
                {t("resume.skill_frontend_title")}
              </SubIntroduceTitle>
              <SkillUl>
                <SkillList>
                  React <SubSkill>(Typescript)</SubSkill>
                </SkillList>
                <SkillList>
                  React Native <SubSkill>(Typescript)</SubSkill>
                </SkillList>
                <SkillList>
                  NextJS <SubSkill>(Typescript)</SubSkill>
                </SkillList>
              </SkillUl>
            </SubProfile>
            <SubProfile>
              <SubIntroduceTitle>
                {t("resume.skill_backend_title")}
              </SubIntroduceTitle>
              <SkillUl>
                <SkillList>
                  Django <SubSkill>(Python)</SubSkill>
                </SkillList>
                <SkillList>
                  Node <SubSkill>(Javascript)</SubSkill>
                </SkillList>
              </SkillUl>
            </SubProfile>
            <SubProfile>
              <SubIntroduceTitle>
                {t("resume.skill_etc_title")}
              </SubIntroduceTitle>
              <SkillUl>
                <SkillList>
                  Windows Presentation Foundation <SubSkill>(C#)</SubSkill>
                </SkillList>
                <SkillList>Git</SkillList>
              </SkillUl>
            </SubProfile>
          </SkillContainer>

          <AwardContainer>
            <IntroduceTitle>{t("resume.award_title")}</IntroduceTitle>
            <ExperienceSubContainer>
              <SubIntroduceTitle>2018.01</SubIntroduceTitle>
              <Introduce>
                <Company>
                  <Link
                    href={
                      "https://www.thisisgame.com/webzine/news/nboard/4/?n=79130"
                    }
                  >
                    {t("resume.award_netmarble_title")}
                  </Link>
                  <Position>{t("resume.award_netmarble_sub")}</Position>
                </Company>
                <IntroduceDescription>
                  {t("resume.award_netmarble_description")}
                </IntroduceDescription>
              </Introduce>
            </ExperienceSubContainer>

            <ExperienceSubContainer>
              <SubIntroduceTitle>2016.07</SubIntroduceTitle>
              <Introduce>
                <Company>
                  <Link
                    href={
                      "https://www.donga.com/news/article/all/20160724/79378351/1"
                    }
                  >
                    {t("resume.award_appjam11_title")}
                  </Link>
                  <Position>{t("resume.award_appjam11_sub")}</Position>
                </Company>
                <IntroduceDescription>
                  {t("resume.award_appjam11_description")}
                </IntroduceDescription>
              </Introduce>
            </ExperienceSubContainer>

            <ExperienceSubContainer>
              <SubIntroduceTitle>2016.03</SubIntroduceTitle>
              <Introduce>
                <Company>
                  <Link
                    href={
                      "https://www.donga.com/news/article/all/20160328/77261138/1"
                    }
                  >
                    {t("resume.award_appjam10_title")}
                  </Link>
                  <Position>{t("resume.award_appjam10_sub")}</Position>
                </Company>
                <IntroduceDescription>
                  {t("resume.award_appjam10_description")}
                </IntroduceDescription>
              </Introduce>
            </ExperienceSubContainer>
          </AwardContainer>

          <OthersContainer>
            <IntroduceTitle>{t("resume.others_title")}</IntroduceTitle>
            <SubProfile>
              <SubIntroduceTitle>
                <GithubLink href="https://github.com/ryu-xh">
                  {t("resume.others_github")}
                </GithubLink>
              </SubIntroduceTitle>
            </SubProfile>
          </OthersContainer>
        </Content>
      </Container>
    </Scrollbar>
  );
};

export default Resume;
