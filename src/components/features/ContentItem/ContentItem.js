import React from 'react';
import PropTypes from 'prop-types';
import { settings } from '../../../data/dataStore';

import InnerContainer from '../InnerContainer/InnerContainer';
import ItemOptiom from '../../common/ItemOption/ItemOption';
import Condition from '../../common/Condition/Condition';

import styles from './ContentItem.module.scss';

const ContentItem = ({ variant, option, ...otherProps }) => {
  const data = settings.content;

  return (
    <li className={!option ?
      styles.item :
      styles.option}
    >
      <Condition
        name={!option ?
          data.condition.txt.outer
          :
          data.condition.txt.inner}
        variant={!option ?
          variant :
          data.condition.variant.small}
      />
      {!option ?
        <InnerContainer variant={variant} {...otherProps} />
        :
        <ItemOptiom option={option} {...otherProps} />
      }
    </li>
  );
};

ContentItem.propTypes = {
  variant: PropTypes.string,
  option: PropTypes.object,
};

export default ContentItem;
