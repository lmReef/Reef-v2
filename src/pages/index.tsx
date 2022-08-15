import Layout from '../components/layout';
import type { NextPage } from 'next';
import styled from 'styled-components';

const StyledLayout = styled(Layout)`
  text-align: center;

  h1 {
    margin-top: 14rem;
    font-size: 6rem;
    color: var(--yellow);
  }
`;

const Home: NextPage = () => {
  return (
    <StyledLayout>
      <h1>Reef Matson</h1>
    </StyledLayout>
  );
};

export default Home;
