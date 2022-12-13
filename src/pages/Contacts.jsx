import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { SmallLoader } from 'components/Loader/SmallLoader';
// import css from '../components/App/App.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Typography
        variant="h2"
        sx={{
          fontSize: `35px`,
          fontWeight: `700`,
          color: `#1f1f1f`,
          paddingTop: `50px`,
          textAlign: `center`,
        }}
      >
        Add new contact in the form below ⬇️
      </Typography>
      <ContactForm />
      <Typography
        variant="h3"
        sx={{
          fontSize: `35px`,
          fontWeight: `700`,
          color: `#1f1f1f`,
          paddingTop: `50px`,
          textAlign: `center`,
        }}
      >
        Contacts
      </Typography>
      {isLoading && !error && <SmallLoader />}
      <Box
        sx={{
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `center`,
          alignItems: `center`,
          paddingTop: `50px`,
        }}
      >
        <Box
          sx={{
            display: `flex`,
            width: `500px`,
            flexDirection: `column`,
            justifyContent: `center`,
            alignItems: `center`,
            boxShadow: `0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2)`,
            backgroundColor: `#ffffff`,
          }}
        >
          <Filter />
          <ContactList />
        </Box>
      </Box>
    </>
  );
};

export default Contacts;
