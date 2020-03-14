import React from 'react';
import PropTypes from 'prop-types';

import styles from './SectionHeader.module.scss';

const SectionHeader = ({name}) => (
  <h1 className={styles.header}>{name}</h1>
);

SectionHeader.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SectionHeader;
