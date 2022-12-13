import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import Notiflix from 'notiflix';
import { Card, Box, TextField, Button } from '@mui/material';

const ContactForm = () => {
  const dispatch = useDispatch();
  const selector = useSelector(selectContacts);

  const handleSumbit = event => {
    event.preventDefault();

    const form = event.target.elements;
    const name = form.name.value;
    const number = form.number.value;
    const NewName = selector.find(data => data.name === name);
    event.target.reset();
    const NewNumber = selector.find(data => data.number === number);

    if (NewName) {
      return Notiflix.Notify.warning(`${NewName.name} is already in contacts`);
    } else if (NewNumber) {
      return Notiflix.Notify.warning(
        `${NewNumber.number} is already in contacts`
      );
    } else {
      return dispatch(addContact({ name, number }));
    }
  };

  return (
    <Box
      sx={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        paddingTop: `50px`,
      }}
    >
      <Card
        component="form"
        sx={{
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `center`,
          alignItems: `center`,
          width: `400px`,
          height: `250px`,
          boxShadow: `0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2)`,
          backgroundColor: `#ffffff`,
        }}
        onSubmit={handleSumbit}
      >
        <TextField
          label="Name"
          variant="standard"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          sx={{ width: `300px`, paddingBottom: `20px` }}
          required
        ></TextField>
        <TextField
          label="Number"
          variant="standard"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          sx={{ width: `300px`, paddingBottom: `30px` }}
          required
        ></TextField>
        <Button
          variant="contained"
          sx={{
            backgroundColor: `aliceblue`,
            color: `#1f1f1f`,
            '&:hover': {
              color: '#fff',
            },
          }}
          type="submit"
        >
          Add contact
        </Button>
      </Card>
    </Box>
  );
};

export default ContactForm;
