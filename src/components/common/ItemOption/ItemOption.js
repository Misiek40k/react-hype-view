import React from 'react';
import PropTypes from 'prop-types';
import { settings } from '../../../data/dataStore';

import Button from '../Button/Button';
import Title from '../Title/Title';

import styles from './ItemOption.module.scss';

const ItemOption = ({ option, deleteItem }) => {
  const data = settings.content.buttons;

  return (
    <div className={styles.component}>
      <Title subtitle={option} />
      <Button
        variant={`${data.size.small} ${data.variant.danger}`}
        name={data.icon.minus}
        clickAction={deleteItem}
      />
    </div>
  );
};

ItemOption.propTypes = {
  option: PropTypes.string.isRequired,
  deleteItem: PropTypes.func,
};

export default ItemOption;
