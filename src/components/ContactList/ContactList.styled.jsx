import styled from '@emotion/styled';

export const ContactListItem = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  gap: 20px;
`;

export const ContactItem = styled.li`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  align-items: center;
`;

export const ContactText = styled.p`
  font-weight: 700;
  font-size: 18px;
`;

export const ContactBtn = styled.button`
  cursor: pointer;
  border-radius: 4px;
  padding: 5px 20px;
  border: none;
  font-weight: 600;

  &:hover,
  &:focus {
    background-color: rgb(255, 2, 2);
    color: #fff;
    transform: scale(1.1);
    transition: all 250ms;
  }
`;
