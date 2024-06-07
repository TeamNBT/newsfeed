import { Link, Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Tabs, Tab } from '@/components/Tabs';
import Typography from '@/components/Typography';
import { colors } from '@/styles/constants';

const tabs = [
  { to: '/profile', label: '내 포스트' },
  { to: '/profile/favorites', label: '저장한 포스트' }
];

const getStyledTabs = (pathname) => {
  return tabs.map((tab) => ({
    ...tab,
    active: pathname === tab.to,
    weight: pathname === tab.to ? 'semibold' : 'medium',
    color: pathname === tab.to ? colors.white : undefined
  }));
};

const ProfileTabs = () => {
  const { pathname } = useLocation();
  const newTabs = getStyledTabs(pathname);

  return (
    <>
      <StTabs>
        {newTabs.map((tab) => (
          <Tab key={tab.to} as={Link} to={tab.to} active={tab.active}>
            <Typography as="span" variant="typography4" weight={tab.weight} color={tab.color}>
              {tab.label}
            </Typography>
          </Tab>
        ))}
      </StTabs>
      <Outlet />
    </>
  );
};

const StTabs = styled(Tabs)`
  margin-bottom: 32px;
`;

export default ProfileTabs;
