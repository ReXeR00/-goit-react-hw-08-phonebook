import styled from '@emotion/styled';

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const UserName = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

export const LogoutBtn = styled.button`
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
