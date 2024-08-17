import { FiSearch } from 'react-icons/fi';
import styles from "./SearchForm.module.css"
import { useState } from 'react';

const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

export const SearchForm = ({onSubmit}) => {
  const [quwery,setQuwery] = useState("")
  const handelChange = e =>{
    setQuwery(e.target.value);
  }
 const handelSubmit = e => {
  e.preventDefault()
  onSubmit(quwery)
  setQuwery("")

 }


  return(<form className={styles.form} onSubmit={handelSubmit}>
  <button className={styles.button} type="submit">
    <FiSearch size="16px" />
  </button>

  <select onChange = {handelChange}
    aria-label="select"
    className={styles.select}
    name="region"
    required
    defaultValue="default"
  >
    <option disabled value="default">
      Select a region
    </option>
    {regions.map(({ id, name, value }) => (
          <option key={id} value={value}>
            {name}
          </option>
        ))}

  </select>
</form>)
};
