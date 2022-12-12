import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Loader } from 'components/Loader/Loader';
import css from '../components/App/App.module.css';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.app}>
      <h1 className={css.pageTitle}>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && !error && <Loader />}
      <div className={css.wrapper}>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default Contacts;
