import React from 'react';
import PropTypes from 'prop-types';
import { settings } from '../../../data/dataStore';

import Button from '../Button/Button';
import Title from '../Title/Title';

import styles from './ItemOption.module.scss';

const ItemOption = ({ id, option, deleteOption }) => {
  const data = settings.content.buttons;

  return (
    <div className={styles.component}>
      <Title subtitle={option.name} />
      <Button
        variant={`${data.size.small} ${data.variant.danger}`}
        name={data.icon.minus}
        clickAction={deleteOption}
        id={id}
        option={option}
      />
    </div>
  );
};

ItemOption.propTypes = {
  option: PropTypes.object.isRequired,
  deleteOption: PropTypes.func,
  id: PropTypes.number,
};

export default ItemOption;
