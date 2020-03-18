import React from 'react';
import PropTypes from 'prop-types';
import { settings } from '../../../data/dataStore';

import Title from '../../common/Title/Title';
import Button from '../../common/Button/Button';

import styles from './Popup.module.scss';

const Popup = ({ id }) => {
  const data = settings.content;
  const buttons = settings.content.buttons;
  return (
    <div className={styles.component}>
      <Title
        subtitle={!id ? data.popup.item : data.popup.option}
      />
      <div className={styles.buttons}>
        <Button
          variant={`${buttons.size.medium} ${buttons.variant.success}`}
          name={buttons.icon.plus}
        />
        <Button
          variant={`${buttons.size.medium} ${buttons.variant.danger}`}
          name={buttons.icon.cancel}
        />
      </div>
    </div>
  );
};

Popup.propTypes = {
  id: PropTypes.string,
};

export default Popup;
