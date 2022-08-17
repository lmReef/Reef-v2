import Grid from '../common/grid';
import GridData from '../../data/grid-data';
import styled from 'styled-components';

const StyledSection = styled.div`
  h2 {
    margin-top: 7rem;
  }
`;

const Work = () => {
  return (
    <StyledSection className="section work">
      <h2>Some places I've worked</h2>
      <h3>and things I've made</h3>
      <div className="section-content">
        <Grid gridData={GridData} />
      </div>
    </StyledSection>
  );
};

export default Work;
