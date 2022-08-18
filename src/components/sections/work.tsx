import Grid from '../common/grid';
import GridData from '../../data/grid-data';
import breakpoints from '../../styles/breakpoints';
import styled from 'styled-components';

const StyledSection = styled.div`
  h2 {
    margin-top: 7rem;

    @media only screen and (max-width: ${breakpoints.mobile}) {
      margin-top: 0;
    }
  }
`;

const Work = () => {
  return (
    <StyledSection className="section work">
      <h2>Some places I&apos;ve worked</h2>
      <h3>and things I&apos;ve made</h3>
      <div className="section-content">
        <Grid gridData={GridData} />
      </div>
    </StyledSection>
  );
};

export default Work;
