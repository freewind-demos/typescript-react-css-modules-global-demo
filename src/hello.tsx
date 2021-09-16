import React, { FC } from 'react';
import styles from './hello.module.css';
import './hello.css';

export const Hello: FC = () => {
  return <div className="container">
    <h1 className={styles.title}>Hello React</h1>
  </div>;
}
