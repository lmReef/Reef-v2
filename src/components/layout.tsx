import Nav from './nav';
import ReactFullpage from '@fullpage/react-fullpage';
import styled from 'styled-components';

const StyledLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  background-color: var(--navy);

  #fp-nav ul li a span,
  .fp-slidesNav ul li a span {
    background: var(--yellow) !important;
  }
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
      <ReactFullpage
        licenseKey={'gplv3-license'}
        anchors={['home', 'about', 'work', 'contact']}
        navigation
        scrollingSpeed={650}
        dragAndMove={true}
        touchSensitivity={15}
        render={({ fullpageApi }) => {
          return <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>;
        }}
      />
      {/* <Footer /> */}
    </StyledLayout>
  );
};

export default Layout;
