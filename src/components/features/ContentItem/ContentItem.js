import React from 'react';
import { settings } from '../../../data/dataStore';

import InnerContainer from '../InnerContainer/InnerContainer';
import Condition from '../../common/Condition/Condition';

import styles from './ContentItem.module.scss';

const ContentItem = () => {
  const data = settings.content;

  return (
    <li className={styles.component}>
      <Condition name={data.condition.outer} />
      <InnerContainer />
    </li>
  );
};

export default ContentItem;
