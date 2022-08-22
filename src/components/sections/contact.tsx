import { AiOutlineLinkedin } from 'react-icons/ai';
import Button from '../common/button';
import { GiSmartphone } from 'react-icons/gi';
import { MdEmail } from 'react-icons/md';
import styled from 'styled-components';

const StyledSection = styled.div`
  .center {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  h4.im-begging-you {
    cursor: default;
    font-size: 1rem;
    color: var(--light-navy);
    letter-spacing: 2px;
  }
`;

const Contact = () => {
  return (
    <StyledSection className="section contact">
      <h2>Get in touch with me</h2>
      <h3>You know you want to</h3>
      <div className="section-content">
        <p>Here&apos;s a few ways to get hold of me</p>
        <br />
        <div className="center">
          <Button
            text={[<MdEmail key={0} />, 'ReefMatson@gmail.com']}
            link="mailto: ReefMatson@gmail.com"
            newTab
          />
          <Button
            text={[<AiOutlineLinkedin key={0} />, 'LinkedIn']}
            link="https://www.linkedin.com/in/reefmatson/"
            newTab
          />
          <Button
            text={[<GiSmartphone key={0} />, '+64 20 4078 3637']}
            onClick={() => {
              navigator.clipboard.writeText('+642040783637');
              alert('+642040783637 Copied to clipboard.');
            }}
          />
        </div>
        <br />
        <br />
        <h4 className="im-begging-you">Please</h4>
      </div>
    </StyledSection>
  );
};

export default Contact;
