import Layout from '../components/layout';
import type { NextPage } from 'next';
import styled from 'styled-components';

const StyledLayout = styled(Layout)`
  text-align: center;

  h1 {
    font-size: 6rem;
    color: var(--yellow);
  }
`;

const Home: NextPage = () => {
  return (
    <StyledLayout>
      <div className="section">
        <h1>Reef Matson</h1>
      </div>
      <div className="section">
        <h2>About</h2>
      </div>
      <div className="section">
        <h2>Work</h2>
      </div>
      <div className="section">
        <h2>Contact</h2>
      </div>
    </StyledLayout>
  );
};

export default Home;
