import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 48px 0;  
`;

const Container = styled.div`
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
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
  text-align:center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Stat = styled.div`
  text-align: center;
`;

const StatTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
`;

const StatCount = styled.p`
  font-size: 2rem;
  font-weight: 700;
`;

const CounterSection = () => {
  const [engineersCount, setEngineersCount] = useState(0);
  const [challengesCount, setChallengesCount] = useState(0);
  const [partnersCount, setPartnersCount] = useState(0);

  useEffect(() => {
    const finalCounts = {
      engineersCount: 100,
      challengesCount: 20,
      partnersCount: 50
    };

    const incrementInterval = 100;

    const intervalId = setInterval(() => {
      setEngineersCount(prevCount => {
        const diff = finalCounts.engineersCount - prevCount;
        return prevCount + (diff > 0 ? 1 : 0);
      });
      setChallengesCount(prevCount => {
        const diff = finalCounts.challengesCount - prevCount;
        return prevCount + (diff > 0 ? 1 : 0);
      });
      setPartnersCount(prevCount => {
        const diff = finalCounts.partnersCount - prevCount;
        return prevCount + (diff > 0 ? 1 : 0);
      });
    }, incrementInterval);

    // Cleanup function to clear interval when all counters reach their final values
    return () => {
      if (engineersCount === finalCounts.engineersCount &&
          challengesCount === finalCounts.challengesCount &&
          partnersCount === finalCounts.partnersCount) {
        clearInterval(intervalId);
      }
    };

  }, [engineersCount, challengesCount, partnersCount]);

  return (
    <Section>
      <Container>
        <Title>Our Community Stats</Title>
        <Grid className='text-body-color dark:text-dark-6'>
          <Stat>
            <StatTitle>Engineers</StatTitle>
            <StatCount>{engineersCount}+</StatCount>
          </Stat>
          <Stat>
            <StatTitle>Challenges</StatTitle>
            <StatCount>{challengesCount}+</StatCount>
          </Stat>
          <Stat>
            <StatTitle>Partners</StatTitle>
            <StatCount>{partnersCount}+</StatCount>
          </Stat>
        </Grid>
      </Container>
    </Section>
  );
}

export default CounterSection;
