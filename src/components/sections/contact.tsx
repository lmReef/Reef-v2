import { AiOutlineLinkedin } from 'react-icons/ai';
import BgSpiralBottom from '../three/bg-spiral-bottom';
import Button from '../common/button';
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
  const email = 'contact@ReefMatson.com';

  return (
    <StyledSection className="section contact">
      <BgSpiralBottom />
      <h2>Get in touch with me</h2>
      <div className="section-content">
        <p>Here&apos;s a few ways to get hold of me</p>
        <br />
        <div className="center">
          <Button
            text={[<MdEmail key={0} />, email]}
            link={`mailto: ${email}`}
            newTab
          />
          <Button
            text={[<AiOutlineLinkedin key={0} />, 'LinkedIn']}
            link="https://www.linkedin.com/in/reefmatson/"
            newTab
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
