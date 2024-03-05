import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const Section = styled.section`
  padding: 48px 0;  
  text-align: center;
`;

const Container = styled.div`
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;

  @media (min-width: 768px) {
    max-width: 640px;
  }

  @media (min-width: 1024px) {
    max-width: 768px;
  }

  @media (min-width: 1280px) {
    max-width: 1024px;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const Text = styled.p`
  font-size: 1.25rem;
  color: #4a5568;
`;

const blink = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const Cursor = styled.span`
  animation: ${blink} 1s step-end infinite;
`;

const HeaderSection = () => {
  const [typingText, setTypingText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const texts = ["Join our community of AI enthusiasts.", "Stay updated with the latest advancements.", "Collaborate with like-minded professionals."];

    const intervalId = setInterval(() => {
      setTypingText(prevText => {
        if (prevText === texts[textIndex]) {
          setTextIndex((textIndex + 1) % texts.length);
          return '';
        } else {
          return texts[textIndex].substring(0, prevText.length + 1);
        }
      });
    }, 100);

    return () => clearInterval(intervalId);
  }, [textIndex]);

  return (
    <Section>
      <Title>Welcome to Our Community!</Title> 
      <Text className='text-body-color dark:text-dark-6'>
        We are a community of AI enthusiasts, researchers, and professionals. We are passionate about the latest advancements in AI and machine learning. Our goal is to collaborate and share knowledge with like-minded individuals. We invite you to join our community and stay updated with the latest trends and research in AI and machine learning.
      </Text>
      <br />
      <Container>               
        <Text className='text-body-color dark:text-dark-6'>
          {typingText}
          <Cursor className='text-body-color dark:text-dark-6'>|</Cursor>
        </Text>
      </Container>      
    </Section>
  );
}

export default HeaderSection;
