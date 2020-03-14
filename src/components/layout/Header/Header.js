import React from 'react';

import Logo from '../../common/Logo/Logo';

import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.component}>
    <Logo/>
  </header>
);

export default Header;
