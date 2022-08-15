import Nav from './nav';
import styled from 'styled-components';

const StyledLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  background-color: var(--navy);
`;

const Layout = ({
  children,
  className,
}: {
  children: JSX.Element | JSX.Element[];
  className?: string;
}) => {
  return (
    <StyledLayout className={className}>
      <Nav />
      <div id="content">{children}</div>
      {/* <Footer /> */}
    </StyledLayout>
  );
};

export default Layout;
