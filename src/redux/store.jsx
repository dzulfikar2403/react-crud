import {configureStore} from '@reduxjs/toolkit'
import countSlice from './reducers/countSlice';

const Store = configureStore({
  reducer:{
    countSlice
  }
}) 

export default Store;