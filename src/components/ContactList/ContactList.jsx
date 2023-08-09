import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import { selectContacts, selectStatusFilter } from 'redux/selectors';
import {
  ContactListItem,
  ContactItem,
  ContactText,
  ContactBtn,
} from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filtered = useSelector(selectStatusFilter);

  const normalizedFilter = filtered.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactListItem>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem>
          <ContactText>
            {name}: {number}
          </ContactText>
          <ContactBtn type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </ContactBtn>
        </ContactItem>
      ))}
    </ContactListItem>
  );
};
