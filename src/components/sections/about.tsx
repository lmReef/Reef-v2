import styled from 'styled-components';

const StyledSection = styled.div`
  .code {
    font-size: 1rem;
  }
`;

const About = () => {
  return (
    <StyledSection className="section about">
      <h2>About Me</h2>
      <div className="section-content">
        <p>
          I am a full-stack software engineer with a passion for building cool
          stuff
        </p>
        <p>
          I'm currently working on awesome user facing products over at{' '}
          <a href="https://www.tvnz.co.nz/" target="_blank" rel="noreferrer">
            TVNZ
          </a>
        </p>
        <br />
        <p className="code">{`// TODO: add something cool here`}</p>
      </div>
    </StyledSection>
  );
};

export default About;
