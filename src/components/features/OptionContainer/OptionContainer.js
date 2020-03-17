import React from 'react';
import PropTypes from 'prop-types';
import { settings } from '../../../data/dataStore';

import Condition from '../../common/Condition/Condition';
import ItemOptiom from '../../common/ItemOption/ItemOption';

import styles from './OptionContainer.module.scss';

const OptionContainer = ({ option, variant }) => {
  const data = settings.content;

  return (
    <div className={styles.component}>
      <Condition name={data.condition.txt.inner} variant={variant} />
      <ItemOptiom option={option} />
    </div>
  );
};

OptionContainer.propTypes = {
  option: PropTypes.string,
  variant: PropTypes.string,
};

export default OptionContainer;
