import React from 'react';
import { settings } from '../../../data/dataStore';

import SectionHeader from '../../common/SectionHeader/SectionHeader';
import Button from '../../common/Button/Button';

import styles from './ContentContainer.module.scss';


const ContentContainer = () => {
  const data = settings.content;

  return (
    <section className={styles.component}>
      <SectionHeader name={data.title} />
      <Button variant='large success' name='plus' />
    </section>
  );
};

export default ContentContainer;
