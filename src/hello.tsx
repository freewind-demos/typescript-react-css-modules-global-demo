import React, {FC} from 'react';
import styles from './hello.module.pcss';

export const Hello: FC = () => {
  return <div className="container">
    <h1 >Hello React</h1>
    <div className={'body'}>
      <div className={'text'}>Some text</div>
    </div>
  </div>;
}
