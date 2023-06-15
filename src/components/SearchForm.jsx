import { useState } from 'react';
import { useSearchStr } from '../lib/useSearchStr';
import CustomRadio from './CustomRadio';

const SearchForm = ({ onSearch }) => {
  const [searchOption, setSearchOption] = useState('shows');
  const [searchStr, setSearchStr] = useSearchStr('');
  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onSubmit = async ev => {
    ev.preventDefault();
    const options = {
      q: searchStr,
      searchOption,
    };
    onSearch(options);
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={searchStr} onChange={onSearchInputChange} />
      <CustomRadio
        label="Shows"
        name="search-option"
        value="shows"
        checked={searchOption === 'shows'}
        onChange={onRadioChange}
      />

      <CustomRadio
        label="Actors"
        name="search-option"
        value="actors"
        checked={searchOption === 'actors'}
        onChange={onRadioChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchForm;
