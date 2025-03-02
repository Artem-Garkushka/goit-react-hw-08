import { useDispatch, useSelector } from "react-redux";
import { changeNameFilter, changeNumberFilter } from '../../redux/filters/filtersSlice'; // Перевірте шлях до файлу
import { selectNameFilter, selectNumberFilter } from '../../redux/filters/filtersSelectors'; // Перевірте шлях до файлу
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);
  const numberFilter = useSelector(selectNumberFilter);

  const handleNameChange = (e) => {
    dispatch(changeNameFilter(e.target.value));
  };

  const handleNumberChange = (e) => {
    dispatch(changeNumberFilter(e.target.value));
  };

  return (
    <div className={css.searchBox}>
      <input
        type="text"
        className={css.input}
        value={nameFilter}
        onChange={handleNameChange}
        placeholder="Search by name..."
      />
      <input
        type="text"
        className={css.input}
        value={numberFilter}
        onChange={handleNumberChange}
        placeholder="Search by number..."
      />
    </div>
  );
};

export default SearchBox;