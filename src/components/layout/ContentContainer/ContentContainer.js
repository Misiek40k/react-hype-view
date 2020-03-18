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
  const [editOption, setEditOption] = useState(null);
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

  const openPop = (id) => {
    if (id) { setEditOption(id); }
    setPopup(true);
  };

  const closePop = () => {
    setEditOption(null);
    setPopup(false);
  };

  const addOption = (id) => {
    console.log(id);
  };

  const addItem = () => {
    console.log('item');
  };

  const contentProps = { openPop, deleteOption, deleteItem };
  const popupProps = { closePop, addItem, addOption, editOption };

  return (
    <section className={styles.component}>
      <SectionHeader name={data.title} />
      <ul>
        {items.map(item => (
          <ContentItem
            key={item.id}
            {...contentProps}
            {...item}
          />
        ))}
      </ul>
      <Button
        variant=
          {`${buttons.size.large} ${buttons.variant.success} ${buttons.line.true} ${buttons.line.outer}`}
        name={buttons.icon.plus}
        clickAction={openPop}
      />
      {popup ?
        <Popup
          {...popupProps}
        />
        : null}
    </section>
  );
};

export default ContentContainer;
