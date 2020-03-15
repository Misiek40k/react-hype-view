import React from 'react';

import InnerContainer from '../InnerContainer/InnerContainer';

import styles from './ContentItem.module.scss';

const ContentItem = props => {
  return (
    <li className={styles.component}>
      <span className={styles.condition}>And</span>
      <InnerContainer />
    </li>
  );
};

export default ContentItem;
