import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/phonebook/phonebook-operations';
import { getLoadingSelector } from 'redux/phonebook/phonebook-selectors';

export default function App() {
  const isLoading = useSelector(getLoadingSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && <h1>Loading...</h1>}
      <Filter />
      <ContactList />
    </>
  );
}
