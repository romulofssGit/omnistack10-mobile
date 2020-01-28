import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/routes';

export default function App() {
  return (
    <Fragment>
      <StatusBar barStyle="light-content" backgroundColor="#7D40e7" />
      <Routes />
    </Fragment>
  );
}
