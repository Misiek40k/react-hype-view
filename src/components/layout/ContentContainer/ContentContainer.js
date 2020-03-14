import React from 'react';
import { settings } from '../../../data/dataStore';

import SectionHeader from '../../common/SectionHeader/SectionHeader';

import styles from './ContentContainer.module.scss';


const ContentContainer = () => {
  const data = settings.content;

  return (
    <section className={styles.component}>
      <SectionHeader name={data.title} />
    </section>
  );
};

export default ContentContainer;
