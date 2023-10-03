import React, { useLayoutEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import DataGrid from './components/DataGrid';
import axios from 'axios';
import { apiEndpoints } from './constants/apiEndpoints';
import { useDispatch } from 'react-redux';
import { setData } from './ReduxStore/actions';
import Footer from './components/Footer';



function App() {
  const dispatch = useDispatch();
 
  useLayoutEffect(()=>{

    var config = {
      method: 'get',
      url: apiEndpoints.FETCH_CAPSULES,
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
  
      dispatch(setData({payload: response.data}))
    })
    .catch(function (error) {
      console.log(error);
    });
  },[])
  return (
    <div className="App">
      <Header />
      <Banner />
      <DataGrid />
      <Footer />
    </div>
  );
}

export default App;
