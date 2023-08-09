import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filter/filterSlice';
import {selectStatusFilter} from '../../redux/selectors';
import { Label, Input } from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name={filter}
        value={filter}
        onChange={onChange}
        placeholder="Please write name"
      />
    </Label>
  );
}
