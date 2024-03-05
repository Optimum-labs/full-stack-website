import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: auto;
`;

const Title = styled.h3`
  padding-left: 32px;
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Container = styled.div`
  max-width: 100%;
  padding-left: auto;
  padding-right: auto;

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

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const TextContent = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 60%;
    padding-right: 22px;
    margin-left: 25px;
    padding-left: 15px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 40%;
    margin-top: 12px;
    
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  margin-top: 2rem;
  text-align: justify;
`;

const InformationSection = () => {
  return (
    <Section>
      <Title className='text-center text-dark dark:text-white'>Information Section</Title>
      <Container>        
        <ContentContainer className='text-body-color dark:text-dark-6'>
          <TextContent>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor nec justo
              consectetur, ut cursus nisi rutrum. Aliquam nec lectus nec velit fermentum hendrerit.
              Quisque at ullamcorper velit. Phasellus convallis leo nec odio sagittis, at scelerisque nisl
              faucibus. Aenean eleifend pharetra ligula, ac sagittis odio rutrum eget.
            </Paragraph>
            <Paragraph>
              Vivamus ac purus in quam ullamcorper dignissim. Cras porttitor, neque quis molestie
              consectetur, dolor dolor vestibulum lacus, ut fringilla turpis sapien id ligula. Donec nec
              diam a nisl lacinia lobortis vel nec libero.
            </Paragraph>
          </TextContent>
          <ImageContainer>
            <Image src="https://via.placeholder.com/300" alt="Placeholder" />
          </ImageContainer>
        </ContentContainer>
      </Container>
    </Section>
  );
}

export default InformationSection;
