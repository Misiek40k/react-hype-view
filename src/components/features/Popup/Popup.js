import React from 'react';
import PropTypes from 'prop-types';
import { settings } from '../../../data/dataStore';

import Title from '../../common/Title/Title';
import Button from '../../common/Button/Button';

import styles from './Popup.module.scss';

const Popup = ({ editOption, closePop, addItem }) => {
  const data = settings.content;
  const buttons = settings.content.buttons;
  return (
    <div className={styles.component}>
      <Title
        subtitle={!editOption ? data.popup.item : data.popup.option}
      />
      <div className={styles.buttons}>
        <Button
          variant={`${buttons.size.medium} ${buttons.variant.success}`}
          name={buttons.icon.plus}
          clickAction={addItem}
          id={editOption}
        />
        <Button
          variant={`${buttons.size.medium} ${buttons.variant.danger}`}
          name={buttons.icon.cancel}
          clickAction={closePop}
        />
      </div>
    </div>
  );
};

Popup.propTypes = {
  editOption: PropTypes.number,
  closePop: PropTypes.func,
  addItem: PropTypes.func,
};

export default Popup;
