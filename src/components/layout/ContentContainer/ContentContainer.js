import React, { useState } from 'react';
import { settings } from '../../../data/dataStore';

import SectionHeader from '../../common/SectionHeader/SectionHeader';
import Button from '../../common/Button/Button';
import ContentItem from '../../features/ContentItem/ContentItem';

import styles from './ContentContainer.module.scss';


const ContentContainer = () => {
  const data = settings.content;
  const buttons = settings.content.buttons;

  const [state, setstate] = useState({
    components: [
      {
        variant: 'medium',
        title: 'Age 40+',
      },
      {
        variant: 'large',
        title: 'Ethnicity',
        options: ['Black', 'Hispanic'],
      },
      {
        variant: 'medium',
        title: 'Income yearly 45k USD+',
      },
    ],
  });

  return (
    <section className={styles.component}>
      <SectionHeader name={data.title} />
      <ul>
        {state.components.map(item => (
          <ContentItem key={item.title} setstate={setstate} {...item} />
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
