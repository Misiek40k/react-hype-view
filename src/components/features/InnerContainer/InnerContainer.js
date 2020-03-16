import React from 'react';
import PropTypes from 'prop-types';

import InnerContainerMedium from './InnerContainerMedium';
import InnerContainerLarge from './InnerContainerLarge';

import styles from './InnerContainer.module.scss';


const variantTypes = {
  medium: InnerContainerMedium,
  large: InnerContainerLarge,
};

const InnerContainer = ({ title, variant }) => {
  const VariantComponent = variantTypes[variant];

  if (!VariantComponent) {
    return null;
  } else {
    return (
      <div className={styles.component}>
        <VariantComponent title={title} />
      </div>
    );
  }
};

InnerContainer.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.string,
};

export default InnerContainer;
