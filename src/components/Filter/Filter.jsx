import css from './Filter.module.css';
import { selectFilter } from 'redux/contacts/selectors';
import { changeFilter } from 'redux/contacts/filterSlice';
import { useSelector, useDispatch } from 'react-redux';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filterChangeHandler = event => {
    const { value } = event.target;
    dispatch(changeFilter(value));
  };

  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        value={filter.value}
        onChange={filterChangeHandler}
      />
    </label>
  );
};

export default Filter;
