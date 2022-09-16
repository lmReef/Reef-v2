import About from '../components/sections/about';
import Contact from '../components/sections/contact';
import Footer from '../components/footer';
import Image from 'next/image';
import Layout from '../components/layout';
import type { NextPage } from 'next';
import Work from '../components/sections/work';
import styled from 'styled-components';

const StyledLayout = styled(Layout)`
  text-align: center;

  .splash {
    max-width: 60%;
    margin: auto;
  }
`;

const Home: NextPage = () => {
  return (
    <StyledLayout>
      <div className="section home">
        <object
          data="/images/splash.svg"
          type="image/svg+xml"
          className="splash"
        >
          <h1>Reef Matson</h1>
        </object>
      </div>
      <About />
      <Work />
      <Contact />

      <Footer className="section footer" />
    </StyledLayout>
  );
};

export default Home;
