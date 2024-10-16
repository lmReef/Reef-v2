import { AiOutlineLinkedin } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import Button from './common/button';
import Image from 'next/image';
import breakpoints from '../styles/breakpoints';
import styled from 'styled-components';

const StyledNav = styled.div`
  width: 100%;
  height: 5rem;
  z-index: 20;

  position: fixed;
  display: flex;
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.05);

  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25);

  .nav-item {
    letter-spacing: 1px;
  }

  .nav-icon {
    font-size: 1.5rem;
  }

  .nav-logo {
    height: 4rem;
    width: 4rem;

    display: flex;
    justify-content: center;

    .button {
      position: relative;
      width: 100%;
      height: 100%;
    }

    img {
      padding: 0.5rem;
    }

    font-size: 1rem;
    font-weight: bold;
  }

  .nav-start {
    margin: 0 0 0 1rem;
    position: absolute;
    left: 0;
    display: flex;
    gap: 0.5rem;
    align-self: center;
    justify-content: center;
  }

  .nav-centered {
    width: 100%;
    display: flex;
    gap: 4rem;
    align-items: center;
    justify-content: center;
  }

  .nav-end {
    margin: 0 1rem 0 0;
    position: absolute;
    right: 0;
    display: flex;
    gap: 0.5rem;
    align-self: center;
    justify-content: center;
  }

  @media only screen and (max-width: ${breakpoints.mobile}) {
    .nav-centered {
      display: none;
    }
  }
`;

const Nav = () => {
  // TODO: implement nav state
  return (
    <StyledNav>
      <div className="nav-start">
        <Button
          className="nav-logo"
          text={
            <Image src="/images/logo-no-circle.svg" layout="fill" alt="logo" />
          }
          link="#home"
        />
      </div>
      <div className="nav-centered">
        <Button className="nav-item" text="About" link="#about" />
        <Button className="nav-item" text="Work" link="#work" />
        <Button className="nav-item" text="Contact" link="#contact" />
      </div>
      <div className="nav-end">
        <Button
          className="nav-item"
          text={'Resume/CV'}
          link="https://drive.google.com/file/d/1Q1HiyRkM1TWx0Op5LOu-cyF-Vb3Me8oY/view?usp=sharing"
          newTab
        />
        <Button
          className="nav-item nav-icon"
          text={<BsGithub />}
          link="https://github.com/lmReef"
          newTab
        />
        <Button
          className="nav-item nav-icon"
          text={<AiOutlineLinkedin />}
          link="https://www.linkedin.com/in/reefmatson/"
          newTab
        />
      </div>
    </StyledNav>
  );
};

export default Nav;
