import styled from 'styled-components';

const StyledButton = styled.div`
  width: fit-content;
  padding: 0.5rem 0.8rem;
  display: flex;
  gap: 0.3rem;
  color: var(--yellow);
  border-radius: var(--border-radius);
  border: 1px solid rgba(0, 0, 0, 0);
  cursor: pointer;

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
  onClick = null,
  className,
  newTab = false,
}: {
  text: string | JSX.Element | (string | JSX.Element)[];
  link?: string;
  onClick?: any;
  className?: string;
  newTab?: boolean;
}) => {
  return onClick ? (
    <a className={className} onClick={onClick}>
      <StyledButton>{text}</StyledButton>
    </a>
  ) : newTab ? (
    <a href={link} target="_blank" rel="noreferrer" className={className}>
      <StyledButton>{text}</StyledButton>
    </a>
  ) : (
    <a href={link} className={className}>
      <StyledButton>{text}</StyledButton>
    </a>
  );
};

export default Button;
