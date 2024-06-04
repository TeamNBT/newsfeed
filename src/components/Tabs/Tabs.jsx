import { Children } from 'react';
import styled from 'styled-components';

const Tabs = ({ children, ...props }) => {
  const tabCount = Children.count(children);

  return (
    <StGrid $tabCount={tabCount} {...props}>
      {children}
    </StGrid>
  );
};

const Tab = ({ children, active, as = 'div', ...props }) => {
  return (
    <StTab as={as} $active={active} {...props}>
      {children}
    </StTab>
  );
};

const StGrid = styled.nav`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$tabCount}, 1fr);
  border-bottom: 1px solid #555555;
`;

const StTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 0 24px;
  grid-column: span 1;
  border-bottom: 1px solid transparent;
  border-bottom-color: ${(props) => (props.$active ? '#ffffff' : 'transparent')};
`;

export { Tab, Tabs };
