import React, {FC} from 'react';
import styles from './hello.css';

export const Hello: FC = () => {
  return <div>
    <h1 className={styles.title}>Hello React</h1>
  </div>;
}
