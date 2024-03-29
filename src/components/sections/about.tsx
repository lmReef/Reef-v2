import BgWaves from '../three/bg-waves';
import styled from 'styled-components';

const StyledSection = styled.div`
  .code {
    font-size: 1rem;
  }
`;

const About = () => {
  return (
    <StyledSection className="section about">
      <BgWaves />
      <h2>About Me</h2>
      <div className="section-content">
        <p>I am a Software Engineer with a passion for building cool stuff</p>
        <p>I&apos;m currently working on my first indie game!</p>
        <br />
      </div>
    </StyledSection>
  );
};

export default About;
