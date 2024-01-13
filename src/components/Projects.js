import React, { useState } from "react";
import styled from "styled-components";
import ProjectCard from "./Cards/ProjectCard";
import { projects } from "../data/cosntants";

const Container = styled.div`
  background: linear-gradient(
    343.07deg,
    rgba(132, 59, 206, 0.06) 5.71%,
    rgba(132, 59, 206, 0) 64.83%
  );
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  max-width: 1350px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 12px;
  padding: 10px 0 80px 0;
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  cursor: pointer;

  ${({ active, theme }) => active && `background-color: ${theme.primary + 30};`}
  &:hover {
    background-color: ${({ theme }) => theme.primary + 30};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 28px;
`;

const Divider = styled.div`
  width: 1.5px;
  background-color: ${({ theme }) => theme.primary};
`;

const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Desc>
        <ToggleGroup>
          {toggle === "all" ? (
            <ToggleButton
              active
              style={{ borderRadius: "6px 0 0 6px" }}
              onClick={() => setToggle("all")}
            >
              All
            </ToggleButton>
          ) : (
            <ToggleButton
              style={{ borderRadius: "6px 0 0 6px" }}
              onClick={() => setToggle("all")}
            >
              All
            </ToggleButton>
          )}

          <Divider />
          {toggle === "web app" ? (
            <ToggleButton
              active
              style={{ borderRadius: "0" }}
              onClick={() => setToggle("web app")}
            >
              Web Apps
            </ToggleButton>
          ) : (
            <ToggleButton
              style={{ borderRadius: "0" }}
              onClick={() => setToggle("web app")}
            >
              Web Apps
            </ToggleButton>
          )}

          <Divider />
          {toggle === "android app" ? (
            <ToggleButton
              active
              style={{ borderRadius: "0" }}
              onClick={() => setToggle("android app")}
            >
              Android Apps
            </ToggleButton>
          ) : (
            <ToggleButton
              style={{ borderRadius: "0" }}
              onClick={() => setToggle("android app")}
            >
              Android Apps
            </ToggleButton>
          )}

          <Divider />
          {toggle === "other" ? (
            <ToggleButton
              active
              style={{ borderRadius: "0 6px 6px 0" }}
              onClick={() => setToggle("other")}
            >
              Other
            </ToggleButton>
          ) : (
            <ToggleButton
              style={{ borderRadius: "0 6px 6px 0" }}
              onClick={() => setToggle("other")}
            >
              Other
            </ToggleButton>
          )}
        </ToggleGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>)}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
