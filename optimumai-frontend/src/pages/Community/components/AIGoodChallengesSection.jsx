import React, { useState } from 'react';
import styled from 'styled-components';
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa';

const Section = styled.section`
  padding: 48px 0;
`;

const Container = styled.div`
  position: relative;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;  
  // overflow: hidden;

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
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Grid = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch; /* For iOS momentum scrolling */
  // margin-bottom: -1rem;
  padding-bottom: 1rem;
  scrollbar-width: none; /* Hide scrollbar for Firefox */
`;

const Card = styled.div`
  flex: 0 0 auto;
  margin: 2rem;
  scroll-snap-align: start;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0);    
    transform: translateY(-2px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 192px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  max-width: 300px;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 100%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #4a5568;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.5rem;

  &:hover {
    color: #2d3748;
  }

  ${({ direction }) => direction === 'left' && 'left: 1rem;'}
  ${({ direction }) => direction === 'right' && 'right: 1rem;'}
`;

const ArrowIcon = styled.i`
  font-size: 1.5rem;
`;

const AIGoodChallengesSection = () => {
  const [scrollX, setScrollX] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum.',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 5,
      title: 'Project 5',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 6,
      title: 'Project 6',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
      imageUrl: 'https://via.placeholder.com/300',
    },
  ];

  const handleScroll = (direction) => {
    const container = document.getElementById('card-container');
    if (container) {
      if (direction === 'left') {
        container.scrollBy({
          left: -container.offsetWidth,
          behavior: 'smooth'
        });
      } else if (direction === 'right') {
        container.scrollBy({
          left: container.offsetWidth,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <Section>
      <Container>
        <Title className='text-center text-dark dark:text-white'>AI for Good Challenges</Title>
        <Grid id="card-container" className='text-body-color dark:text-dark-6'>
          {projects.map(project => (
            <Card key={project.id}>
              <Image src={project.imageUrl} alt={project.title} />
              <Content>
                <ProjectTitle>{project.title}</ProjectTitle>
                <Description>{project.description}</Description>
              </Content>
            </Card>
          ))}
        </Grid>
        <NavigationButton direction="left" onClick={() => handleScroll('left')}>
          <FaArrowAltCircleLeft className="fas fa-chevron-left" />
        </NavigationButton>
        <NavigationButton direction="right" onClick={() => handleScroll('right')}>
          <FaArrowAltCircleRight className="fas fa-chevron-right" />
        </NavigationButton>
      </Container>
    </Section>
  );
}

export default AIGoodChallengesSection;
