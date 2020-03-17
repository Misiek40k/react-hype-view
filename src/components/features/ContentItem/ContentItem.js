import React from 'react';
import PropTypes from 'prop-types';
import { settings } from '../../../data/dataStore';

import InnerContainer from '../InnerContainer/InnerContainer';
import Condition from '../../common/Condition/Condition';

import styles from './ContentItem.module.scss';

const ContentItem = ({ variant, ...otherProps }) => {
  const data = settings.content;

  return (
    <li className={styles.component}>
      <Condition name={data.condition.txt.outer} variant={variant} />
      <InnerContainer variant={variant} {...otherProps} />
    </li>
  );
};

ContentItem.propTypes = {
  variant: PropTypes.string,
};

export default ContentItem;
