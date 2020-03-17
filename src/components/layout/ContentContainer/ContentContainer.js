import React, { useState } from 'react';
import { settings } from '../../../data/dataStore';

import SectionHeader from '../../common/SectionHeader/SectionHeader';
import Button from '../../common/Button/Button';
import ContentItem from '../../features/ContentItem/ContentItem';
import Popup from '../../features/Popup/Popup';

import styles from './ContentContainer.module.scss';


const ContentContainer = () => {
  const data = settings.content;
  const buttons = settings.content.buttons;

  const [popup, setPopup] = useState(false);
  const [items, setItems] = useState(
    [
      {
        id: 0,
        variant: 'medium',
        title: 'Age 40+',
      },
      {
        id: 1,
        variant: 'large',
        title: 'Ethnicity',
        options: ['Black', 'Hispanic'],
      },
      {
        id: 2,
        variant: 'medium',
        title: 'Income yearly 45k USD+',
      },
    ],
  );

  const deleteItem = (id) => {
    const newState = items.filter((item) => {
      return item.id !== id;
    });

    setItems(newState);
  };

  const deleteOption = (id, option) => {
    const newState = items.map(item =>
      item.id === id
        ?
        { ...item, options: item.options.filter(item => item !== option) }
        :
        item
    );

    setItems(newState);
  };

  const openPop = () => {
    setPopup(true);
  };

  const passMethods = { openPop, deleteOption, deleteItem };

  return (
    <section className={styles.component}>
      <SectionHeader name={data.title} />
      <ul>
        {items.map(item => (
          <ContentItem
            key={item.id}
            {...passMethods}
            {...item} />
        ))}
      </ul>
      <Button
        variant={`${buttons.size.large} ${buttons.variant.success}`}
        name={buttons.icon.plus}
        clickAction={openPop}
      />
      {popup ? <Popup /> : null}
    </section>
  );
};

export default ContentContainer;
