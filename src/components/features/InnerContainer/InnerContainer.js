import React from 'react';

import Title from '../../common/Title/Title';
import Button from '../../common/Button/Button';

import styles from './InnerContainer.module.scss';

const InnerContainer = props => {
  return (
    <div className={styles.component}>
      <Title subtitle='Age 40+' />
      <Button />
    </div>
  );
};

export default InnerContainer;
