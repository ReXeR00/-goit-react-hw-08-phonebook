import AuthNav from 'components/AuthNav/AuthNav';
import { Navigation } from '../Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks';
import { HeaderAppBar } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderAppBar>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderAppBar>
  );
};
