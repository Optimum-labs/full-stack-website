import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 48px 0;
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

const Title = styled.h3`
  font-size: 1.875rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const EmailInput = styled.input`
  background-color: #4a5568;
  color: white;
  border: 1px solid #2d3748;
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 1rem;
    width: auto;
  }

  &:focus {
    outline: none;
    border-color: #4299e1;
  }
`;

const SubscribeButton = styled.button`
  background-color: #4299e1;
  color: white;
  font-weight: 600;
  padding: 0.75rem 2rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3182ce;
  }

  @media (min-width: 768px) {
    width: auto;
  }
`;

const NewsletterSubscribeSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('You have subscribed to our newsletter!');
  };

  return (
    <Section>
      <Container>
        <Title className='text-center text-dark dark:text-white'>Subscribe to Our Newsletter</Title>
        <Paragraph className='text-body-color dark:text-dark-6'>Stay up-to-date with the latest news, events, and updates from our community. When you subscribe to our newsletter, you will receive a weekly email with the latest AI news and challenges.</Paragraph>
        <Form onSubmit={handleSubmit}>
          <EmailInput
            type="email"
            placeholder="Your Email Address"
            required
          />
          <SubscribeButton type="submit">
            Subscribe
          </SubscribeButton>
        </Form>
      </Container>
    </Section>
  );
};

export default NewsletterSubscribeSection;
