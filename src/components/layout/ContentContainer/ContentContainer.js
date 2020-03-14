import React  from 'react';

import SectionHeader from '../../common/SectionHeader/SectionHeader';

import styles from './ContentContainer.module.scss';


const ContentContainer = () => {

  return (
    <section className={styles.component}>
      <SectionHeader/>
    </section>
  );
};

export default ContentContainer;
