import React from 'react';
import PropTypes from 'prop-types';
import { settings } from '../../../data/dataStore';

import Title from '../../common/Title/Title';
import Button from '../../common/Button/Button';
import OptionContainer from '../OptionContainer/OptionContainer';

import styles from './InnerContainer.module.scss';

const InnerContainerLarge = ({ title, options, deleteItem, id }) => {
  const data = settings.content.buttons;

  return (
    <div className={styles.large}>
      <div className={styles.title}>
        <div className={styles.border}>
          <Title subtitle={title} />
        </div>
        <Button
          variant={`${data.size.small} ${data.variant.danger}`}
          name={data.icon.minus}
          clickAction={deleteItem}
          id={id}
        />
      </div>
      <ul>
        {options.map(item => (
          <OptionContainer key={item} option={item} deleteItem={deleteItem} />
        ))}
      </ul>
      <Button
        variant={`${data.size.medium} ${data.variant.success}`}
        name={data.icon.plus}
      />
    </div>
  );
};

InnerContainerLarge.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array,
  deleteItem: PropTypes.func,
  id: PropTypes.number,
};

export default InnerContainerLarge;
