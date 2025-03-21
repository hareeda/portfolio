import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const SectionContainer = styled(motion.div)`
  background: ${({ bg }) => bg};
  color: white;
  padding: 40px;
  margin: 20px auto;
  width: 80%;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.2);
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 15px;
`;

const SectionContent = styled.p`
  font-size: 1.2rem;
`;

const Section = ({ id, title, content }) => {
  const colors = ["#4a90e2", "#ff6b6b", "#6bffb3", "#ffb86b", "#d46bff", "#ff6ba2"];
  const bgColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <SectionContainer
      id={id}
      bg={bgColor}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <SectionTitle>{title}</SectionTitle>
      <SectionContent>{content}</SectionContent>
    </SectionContainer>
  );
};

export default Section;
