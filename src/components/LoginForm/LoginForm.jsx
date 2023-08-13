import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOprerations';
import { Form, Label, Button, Input } from './LoginForm.styled';

export const LogInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Email
        <Input type="email" name="email"></Input>
      </Label>

      <Label>
        Password
        <Input type="password" name="password"></Input>
      </Label>
      <Button type="submit">Log in</Button>
    </Form>
  );
};
