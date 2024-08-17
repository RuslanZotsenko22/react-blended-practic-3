import { Link } from 'react-router-dom';
import css from './GoBackBtn.module.css';

export const GoBackBtn = ({ path, children }) => {
  return (
    <Link className={css.link} to={path}>
      {children}
    </Link>
  );
};
