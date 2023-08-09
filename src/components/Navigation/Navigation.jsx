import { useAuth } from 'hooks';
import { NavigationContainer, Link } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <NavigationContainer>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </NavigationContainer>
  );
};
