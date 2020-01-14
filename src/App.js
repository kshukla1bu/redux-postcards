import React, { useEffect } from 'react';
import './App.css';
import Header from './Header'
import ListCards from './ListCards';
import { handleGetData } from './actions/actions';
import { connect } from 'react-redux';

function App(props) {

  useEffect(() => {
    const { dispatch } = props;
    dispatch(handleGetData());
  });
  return (
    <div className="App">
      <Header/>
      <ListCards/>
    </div>
  );
}


export default connect()(App)
