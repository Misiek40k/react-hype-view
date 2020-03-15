import React from 'react';
import PropTypes from 'prop-types';

import styles from './Condition.module.scss';

const Condition = ({ name }) => (
  <span className={styles.component}>{name}</span>
);


Condition.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Condition;
