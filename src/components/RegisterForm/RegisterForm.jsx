import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOprerations';
import { Form, Label, Button, Input } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
        UserName
        <Input type="text" name="name"></Input>
      </Label>
      <Label>
        Password
        <Input type="password" name="password"></Input>
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
