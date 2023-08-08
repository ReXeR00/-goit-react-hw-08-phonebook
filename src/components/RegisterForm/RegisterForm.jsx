import { Form, Label, Button, Input } from './RegisterForm.styled';

export const RegisterForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    form.reset();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Email
        <Input type="email" name="emial"></Input>
      </Label>

      <Label>
        UserName
        <Input type="text" name="name"></Input>
      </Label>
      <Label>
        Password
        <Input type="password" name="password"></Input>
      </Label>
      <Button>Log in </Button>
    </Form>
  );
};
