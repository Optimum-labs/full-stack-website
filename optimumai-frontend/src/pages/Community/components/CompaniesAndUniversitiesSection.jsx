import React from 'react';
import styled, { keyframes } from 'styled-components';

const googleLogo = 'https://via.placeholder.com/150'; 
const metaLogo = 'https://via.placeholder.com/150';
const appleLogo = 'https://via.placeholder.com/150';
const amazonLogo = 'https://via.placeholder.com/150';
const microsoftLogo = 'https://via.placeholder.com/150';
const tcsLogo = 'https://via.placeholder.com/150';
const infosysLogo = 'https://via.placeholder.com/150';
const wiproLogo = 'https://via.placeholder.com/150';
const accentureLogo = 'https://via.placeholder.com/150';
const cognizantLogo = 'https://via.placeholder.com/150';

const Section = styled.section`
  padding: 48px 0;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  overflow-x: auto; /* Enable horizontal scrolling */
  white-space: nowrap; /* Keep all items on a single line */
  scrollbar-width: none; /* Hide scrollbar for Firefox */
  -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */
  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
  }
`;

const Title = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #4a5568;
  padding-left: 32px;
`;

const Grid = styled.div`
  display: flex; /* Use flexbox for horizontal layout */
  gap: 2rem;
  padding-bottom: 1rem; /* Add some bottom padding for spacing */
  animation: scroll 20s linear infinite; /* Apply the scroll animation */
  @keyframes scroll {
    0% {
      transform: translateX(10%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const PartnerCard = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;

const PartnerLogo = styled.img`
  height: 40px; /* Set the height of the logos */
`;

const PartnerName = styled.p`
  margin-left: 0.5rem;
`;

const CompaniesAndUniversitiesSection = () => {
  const companies = [
    { name: 'Google', logo: googleLogo },
    { name: 'Meta', logo: metaLogo },
    { name: 'Apple', logo: appleLogo },
    { name: 'Amazon', logo: amazonLogo },
    { name: 'Microsoft', logo: microsoftLogo },
    { name: 'Oracle', logo: googleLogo },
    { name: 'IBM', logo: metaLogo },
    { name: 'Tesla', logo: appleLogo },
    { name: 'Facebook', logo: amazonLogo },
    { name: 'Twitter', logo: microsoftLogo },
    { name: 'TCS', logo: tcsLogo },
    { name: 'Infosys', logo: infosysLogo },
    { name: 'Wipro', logo: wiproLogo },
    { name: 'Accenture', logo: accentureLogo },
    { name: 'Cognizant', logo: cognizantLogo },
  ];

  return (
    <Section>
      {/* <Title className='text-dark dark:text-white'>Our Partners</Title> */}
      <Container>        
        <Grid className='text-body-color dark:text-dark-6'>
          {companies.map((company, index) => (
            <PartnerCard key={index}>
              <PartnerLogo src={company.logo} alt={company.name} />
              <PartnerName>{company.name}</PartnerName>
            </PartnerCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default CompaniesAndUniversitiesSection;
