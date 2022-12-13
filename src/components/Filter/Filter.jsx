import { selectFilter } from 'redux/contacts/selectors';
import { changeFilter } from 'redux/contacts/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { TextField } from '@mui/material';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filterChangeHandler = event => {
    const { value } = event.target;
    dispatch(changeFilter(value));
  };

  return (
    <TextField
      label="Find contacts by name"
      variant="outlined"
      type="text"
      value={filter.value}
      onChange={filterChangeHandler}
      sx={{
        marginTop: `15px`,
        width: `400px`,
        paddingBottom: `20px`,
      }}
    ></TextField>
  );
};

export default Filter;
