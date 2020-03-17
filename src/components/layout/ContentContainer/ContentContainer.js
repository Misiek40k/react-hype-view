import React, { useState } from 'react';
import { settings } from '../../../data/dataStore';

import SectionHeader from '../../common/SectionHeader/SectionHeader';
import Button from '../../common/Button/Button';
import ContentItem from '../../features/ContentItem/ContentItem';

import styles from './ContentContainer.module.scss';


const ContentContainer = () => {
  const data = settings.content;
  const buttons = settings.content.buttons;

  const [state, setstate] = useState(
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
    const newState = state.filter((item) => {
      return item.id !== id;
    });

    setstate(newState);
  };

  const deleteOption = (id, option) => {
    const newState = state.map(item =>
      item.id === id
        ?
        { ...item, options: item.options.filter(item => item !== option) }
        :
        item
    );

    setstate(newState);
  };

  return (
    <section className={styles.component}>
      <SectionHeader name={data.title} />
      <ul>
        {state.map(item => (
          <ContentItem
            key={item.id}
            deleteItem={deleteItem}
            deleteOption={deleteOption}
            {...item} />
        ))}
      </ul>
      <Button
        variant={`${buttons.size.large} ${buttons.variant.success}`}
        name={buttons.icon.plus}
      />
    </section>
  );
};

export default ContentContainer;
