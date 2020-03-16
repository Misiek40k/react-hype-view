import React from 'react';
import PropTypes from 'prop-types';
import { settings } from '../../../data/dataStore';

import Title from '../../common/Title/Title';
import Button from '../../common/Button/Button';

import styles from './InnerContainer.module.scss';

const InnerContainer = ({ title }) => {
  const data = settings.content.buttons;

  return (
    <div className={styles.component}>
      <Title subtitle={title} />
      <Button
        variant={`${data.size.small} ${data.variant.danger}`}
        name={data.icon.minus}
      />
    </div>
  );
};

InnerContainer.propTypes = {
  title: PropTypes.string,
};

export default InnerContainer;
