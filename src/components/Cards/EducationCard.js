import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 650px;
  border-radius: 10px;
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  border: 0.1px solid #854ce6;
  box-shadow: 0px 4px 24px rgba(23, 92, 230, 0.15);
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
  @media (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px;
  }
`;
const Top = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`;
const Logo = styled.img`
  height: 50px;
  width: 50px;
  background-color: white;
  border-radius: 10px;
  margin-top: 4px;
  @media (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Degree = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary + 99};
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Duration = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Span = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Grade = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const EducationCard = ({ education }) => {
  return (
    <Card>
      <Top>
        <Logo src={education.img} />
        <Body>
          <Name>{education.school}</Name>
          <Degree>{education.degree}</Degree>
          <Duration>{education.date}</Duration>
        </Body>
      </Top>
      <Grade><b>Grade: </b>{education.grade}</Grade>
      <Span>{education.desc}</Span>
    </Card>
  );
};

export default EducationCard;
