import About from '../components/sections/about';
import Contact from '../components/sections/contact';
import Footer from '../components/footer';
import Layout from '../components/layout';
import type { NextPage } from 'next';
import Work from '../components/sections/work';
import styled from 'styled-components';

const StyledLayout = styled(Layout)`
  text-align: center;
`;

const Home: NextPage = () => {
  return (
    <StyledLayout>
      <div className="section home">
        <h1>Reef Matson</h1>
      </div>
      <About />
      <Work />
      <Contact />

      <Footer className="section footer" />
    </StyledLayout>
  );
};

export default Home;
