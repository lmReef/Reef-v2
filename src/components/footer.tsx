import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  height: 15rem;

  background-color: var(--dark-navy);
`;

const Footer = ({ className }: { className?: string }) => {
  return (
    <StyledFooter className={className}>
      <h2 className="code">{`// TODO: make a footer section`}</h2>
    </StyledFooter>
  );
};

export default Footer;
