import React from 'react';
import PropTypes from 'prop-types';
import { settings } from '../../../data/dataStore';

import Title from '../../common/Title/Title';
import Button from '../../common/Button/Button';
import ItemOption from '../../common/ItemOption/ItemOption';

import styles from './InnerContainer.module.scss';

const InnerContainerLarge = ({ title, options }) => {
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
        />
      </div>
      <ul>
        {options.map(item => (
          <ItemOption key={item} option={item} />
        ))}
      </ul>
    </div>
  );
};

InnerContainerLarge.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array,
};

export default InnerContainerLarge;
