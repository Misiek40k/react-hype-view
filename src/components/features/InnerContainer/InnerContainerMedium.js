import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { settings } from '../../../data/dataStore';

import Title from '../../common/Title/Title';
import Button from '../../common/Button/Button';

const InnerContainerMedium = ({ title }) => {
  const data = settings.content.buttons;
  return (
    <Fragment>
      <Title subtitle={title} />
      <Button
        variant={`${data.size.small} ${data.variant.danger}`}
        name={data.icon.minus}
      />
    </Fragment>
  );
};

InnerContainerMedium.propTypes = {
  title: PropTypes.string,
};

export default InnerContainerMedium;
