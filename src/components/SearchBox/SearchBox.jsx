import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import s from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectNameFilter);

  const onChange = (e) => dispatch(changeFilter(e.target.value));

  return (
    <div>
      <label className={s.name}>
        <div>Find contacts by name</div>
        <input
          type="text"
          id="filter"
          value={search}
          onChange={onChange}
          className={s.input}
          placeholder="Your name..."
        />
      </label>
    </div>
  );
};

export default SearchBox;