import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  align-items: center;
`;
export const ContactLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
  font-weight: 700;
`;
export const ContactInput = styled.input`
  width: 400px;
  height: 35px;
  border-radius: 4px;
  border: none;
  font-size: 20px;
  font-weight: 600;
  color: rgb(114, 114, 114);
  padding: 5px 10px;
  outline: transparent;
`;
export const AddContactBtn = styled.button`
  border-radius: 4px;
  padding: 10px 30px;
  border: none;
  cursor: pointer;
  font-weight: 600;

  &:hover,
  &:focus {
    background-color: rgb(17, 189, 55);
    color: #fff;
    transform: scale(1.1);
    transition: all 250ms;
  }
`;
