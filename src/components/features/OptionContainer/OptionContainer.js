import React from 'react';
import PropTypes from 'prop-types';
import { settings } from '../../../data/dataStore';

import Condition from '../../common/Condition/Condition';
import ItemOptiom from '../../common/ItemOption/ItemOption';

import styles from './OptionContainer.module.scss';

const OptionContainer = ({ option, ...otherProps }) => {
  const data = settings.content;

  return (
    <div className={styles.component}>
      <Condition name={data.condition.txt.inner} variant={data.condition.variant.small} />
      <ItemOptiom option={option} {...otherProps} />
    </div>
  );
};

OptionContainer.propTypes = {
  option: PropTypes.object,
  variant: PropTypes.string,
};

export default OptionContainer;
