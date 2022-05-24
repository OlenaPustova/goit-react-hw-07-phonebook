import ContactListItem from 'components/ContactListItem/ContactListItem';
import s from './ContactList.module.scss';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/phonebook/phonebook-selectors';

function ContactList() {
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <ul className={s.list}>
      {filteredContacts.map(contact => (
        <ContactListItem key={contact.id} {...contact} />
      ))}
    </ul>
  );
}

export default ContactList;
