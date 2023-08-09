import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  font-size: 24px;
  text-decoration: none;
  color: inherit;
  font-weight: 900;
`;

export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;
