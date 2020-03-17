import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { settings } from '../../../data/dataStore';

import Title from '../../common/Title/Title';
import Button from '../../common/Button/Button';

const InnerContainerMedium = ({ id, title, deleteItem }) => {
  const data = settings.content.buttons;
  return (
    <Fragment>
      <Title subtitle={title} />
      <Button
        variant={`${data.size.small} ${data.variant.danger}`}
        name={data.icon.minus}
        clickAction={deleteItem}
        id={id}
      />
    </Fragment>
  );
};

InnerContainerMedium.propTypes = {
  title: PropTypes.string,
  deleteItem: PropTypes.func,
  id: PropTypes.number,
};

export default InnerContainerMedium;
