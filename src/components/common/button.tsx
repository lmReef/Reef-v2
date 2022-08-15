import styled from 'styled-components';

const StyledButton = styled.div`
  padding: 0.5rem 0.8rem;
  display: flex;
  color: var(--yellow);
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0);

  transition: 0.2s all ease-in-out;

  svg {
    fill: var(--yellow);
  }

  &:hover {
    border: 1px solid var(--yellow);
  }
`;

const Button = ({
  text,
  link,
  className,
}: {
  text: string | JSX.Element;
  link?: string;
  className?: string;
}) => {
  return (
    <a href={link} className={className}>
      <StyledButton>{text}</StyledButton>
    </a>
  );
};

export default Button;
