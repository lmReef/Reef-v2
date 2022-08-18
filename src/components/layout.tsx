import Nav from './nav';
import ReactFullpage from '@fullpage/react-fullpage';
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
      <ReactFullpage
        licenseKey={'gplv3-license'}
        anchors={['home', 'about', 'work', 'contact', 'footer']}
        navigation
        scrollingSpeed={650}
        easing="easeInOutCubic"
        dragAndMove={true}
        touchSensitivity={15}
        keyboardScrolling={true}
        paddingTop="5rem"
        render={({ fullpageApi }) => {
          return <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>;
        }}
      />
    </StyledLayout>
  );
};

export default Layout;
