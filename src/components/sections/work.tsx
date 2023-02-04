import BgSpiralTop from '../three/bg-spiral-top';
import Grid from '../common/grid';
import GridData from '../../data/grid-data';
import styled from 'styled-components';

const StyledSection = styled.div``;

const Work = () => {
  return (
    <StyledSection className="section work">
      <BgSpiralTop />
      <h2>Some places I&apos;ve worked</h2>
      <h3>and things I&apos;ve made</h3>
      <div className="section-content">
        <Grid gridData={GridData} />
      </div>
    </StyledSection>
  );
};

export default Work;
