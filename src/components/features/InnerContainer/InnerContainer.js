import React from 'react';
import { settings } from '../../../data/dataStore';

import Title from '../../common/Title/Title';
import Button from '../../common/Button/Button';

import styles from './InnerContainer.module.scss';

const InnerContainer = props => {
  const data = settings.content.buttons;

  return (
    <div className={styles.component}>
      <Title subtitle='Age 40+' />
      <Button
        variant={`${data.size.small} ${data.variant.danger}`}
        name={data.icon.minus}
      />
    </div>
  );
};

export default InnerContainer;
