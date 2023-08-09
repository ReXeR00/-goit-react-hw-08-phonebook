import { AuthNavContainer, Link } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <AuthNavContainer>
      <Link to="register">Register</Link>
      <Link to="/login">Log In</Link>
    </AuthNavContainer>
  );
}
