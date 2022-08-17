/* eslint-disable react/jsx-key */

import { AiOutlineLinkedin } from 'react-icons/ai';
import Button from '../common/button';
import { GiSmartphone } from 'react-icons/gi';
import { MdEmail } from 'react-icons/md';
import styled from 'styled-components';

const StyledSection = styled.div`
  .center {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
`;

const Contact = () => {
  return (
    <StyledSection className="section contact">
      <h2>Get in touch with me</h2>
      <div className="section-content">
        <p>Here's a few ways to get hold of me</p>
        <br />
        <div className="center">
          <Button
            text={[<MdEmail />, 'ReefMatson@gmail.com']}
            link="mailto: ReefMatson@gmail.com"
            newTab
          />
          <Button
            text={[<AiOutlineLinkedin />, 'LinkedIn']}
            link="https://www.linkedin.com/in/reefmatson/"
            newTab
          />
          <Button
            text={[<GiSmartphone />, '+64 20 4078 3637']}
            onClick={() => {
              navigator.clipboard.writeText('+642040783637');
              alert('+642040783637 Copied to clipboard.');
            }}
          />
        </div>
      </div>
    </StyledSection>
  );
};

export default Contact;
