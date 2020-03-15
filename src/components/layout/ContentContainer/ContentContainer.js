import React from 'react';
import { settings } from '../../../data/dataStore';

import SectionHeader from '../../common/SectionHeader/SectionHeader';
import Button from '../../common/Button/Button';
import ContentItem from '../../features/ContentItem/ContentItem';

import styles from './ContentContainer.module.scss';


const ContentContainer = () => {
  const data = settings.content;
  const buttons = settings.content.buttons;

  return (
    <section className={styles.component}>
      <SectionHeader name={data.title} />
      <ul>
        <ContentItem />
      </ul>
      <Button
        variant={`${buttons.size.large} ${buttons.variant.success}`}
        name={buttons.icon.plus}
      />
    </section>
  );
};

export default ContentContainer;
