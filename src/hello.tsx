import React, { FC } from 'react';
import './hello.css';
// @ts-ignore
import data from './hello.css?raw'
type Props = {};

export const Hello: FC<Props> = ({}) => {
  return <div>
    <h1>Hello React</h1>
    <div>{data}</div>
  </div>;
}
