import React from 'react';
import PropTypes from 'prop-types';
import css from './Errors.css';

export default function Errors(props) {
  const { errors } = props;

  return (
    <div className={css.errors}>
      <ul>
        {errors.map((error) =>
          <li className={css.errors}>{error.message}</li>
        )}
      </ul>
    </div>
  );
}

Errors.propTypes = {
};
