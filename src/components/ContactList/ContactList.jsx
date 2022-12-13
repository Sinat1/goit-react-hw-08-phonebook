import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { IconButton } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const ContactList = () => {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectVisibleContacts);

  const removeContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul style={{ width: `400px`, paddingLeft: `0`, paddingBottom: `20px` }}>
      {visibleContacts.map(contact => {
        return (
          <li
            style={{
              display: 'flex',
              justifyContent: `space-between`,
              alignItems: `center`,
              borderBottom: `1px solid gray`,
              borderRadius: `1px`,
            }}
            key={contact.id}
          >
            {contact.name}: {contact.number}
            <IconButton
              size="large"
              sx={{
                '&:hover': {
                  backgroundColor: `white`,
                },
              }}
              type="button"
              onClick={() => removeContact(contact.id)}
            >
              <DeleteForeverIcon
                sx={{
                  fill: `#3b5998`,
                  '&:hover': {
                    fill: `red`,
                  },
                }}
              />
            </IconButton>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
