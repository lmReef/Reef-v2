import { useEffect, useState } from 'react';

import { AiOutlineLinkedin } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import Button from './common/button';
import Image from 'next/image';
import Link from 'next/link';
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
      padding: 1rem;
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

  @media only screen and (max-width: 370px) {
    .resume-button {
      display: none;
    }
  }
`;

const Nav = () => {
  // TODO: implement nav state
  return (
    <StyledNav>
      <div className="nav-start">
        <div className="nav-logo">
          {/* <Link href="#home"> */}
          <Button
            className="nav-logo"
            text={
              <Image
                src="/images/logo-no-circle.svg"
                width="100%"
                height="100%"
                alt="logo"
              />
            }
            link="#home"
          />
          {/* <a href="#home">
            <Image
              src="/images/logo-no-circle.svg"
              width="100%"
              height="100%"
              alt="logo"
            />
          </a> */}
          {/* </Link> */}
        </div>
      </div>
      <div className="nav-centered">
        <Button className="nav-item" text="About" link="#about" />
        <Button className="nav-item" text="Work" link="#work" />
        <Button className="nav-item" text="Contact" link="#contact" />
      </div>
      <div className="nav-end">
        <Button
          className="nav-item resume-button"
          text="Resume"
          link="/Reef_Matson_Resume.pdf"
          newTab
        />
        <Button
          className="nav-item nav-icon"
          text={<BsGithub />}
          link="https://github.com/lmReef"
        />
        <Button
          className="nav-item nav-icon"
          text={<AiOutlineLinkedin />}
          link="https://www.linkedin.com/in/reefmatson/"
        />
      </div>
    </StyledNav>
  );
};

export default Nav;
