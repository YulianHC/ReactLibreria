import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store/store';
import { AppRouter } from './Routers/AppRouter';


export const LibreriaApp = () => {
  return (
<Provider store={store}> 
  <AppRouter/>
</Provider>
  )
};
