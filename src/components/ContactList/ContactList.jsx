import ContactListItem from 'components/ContactListItem/ContactListItem';
import s from './ContactList.module.scss';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import {
  getContactsSelector,
  getFilterSelector,
} from 'redux/phonebook/phonebook-selectors';

function ContactList() {
  const filter = useSelector(getFilterSelector);
  const contacts = useSelector(getContactsSelector);

  const getFilteredContacts = useMemo(() => {
    const filterToLowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterToLowerCase)
    );
  }, [contacts, filter]);

  return (
    <ul className={s.list}>
      {getFilteredContacts.map(contact => (
        <ContactListItem key={contact.id} {...contact} />
      ))}
    </ul>
  );
}

export default ContactList;
