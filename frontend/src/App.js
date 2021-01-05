import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import Header from './components/Header';
import Body from './components/Body';

import './app.scss';
import './assets/css/style.scss';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {

  return (
    
    <Root>
      <Header />
      <Body />
    </Root>
  )
}

export default App
