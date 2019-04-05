import PropTypes from 'prop-types';

import css from './Field.css';

export default function Field(props) {
  const { label, value, onChange, type } = props;

  return (
    <div className={css.field}>
      <legend className={css.field__label}>{label}</legend>
      <input type={type} className={css.field__input} value={value} onChange={onChange}></input>
    </div>
  );
}

Field.propTypes = {

}

Field.defaultProps = {

}
