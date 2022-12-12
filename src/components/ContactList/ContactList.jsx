import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectVisibleContacts);

  const removeContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(contact => {
        return (
          <li className={css.contactList__item} key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className={css.contactList__btn}
              type="button"
              onClick={() => removeContact(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
