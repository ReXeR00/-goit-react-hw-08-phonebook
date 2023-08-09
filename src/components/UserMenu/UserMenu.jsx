import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOprerations';
import { MenuContainer, UserName, LogoutBtn } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <MenuContainer>
      <UserName>{user.name}</UserName>
      <LogoutBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogoutBtn>
    </MenuContainer>
  );
}
