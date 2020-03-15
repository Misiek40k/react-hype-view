import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon/Icon';

import styles from './Button.module.scss';

const Button = ({ variant = '', name }) => (
  <button
    className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}
  >
    <Icon name={name} />
  </button>
);

Button.propTypes = {
  variant: PropTypes.string,
  name: PropTypes.string,
};

export default Button;
