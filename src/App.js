import './App.css';
import { useEffect } from 'react';
import { setAll } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from './components/Header';
import { Route, Routes } from 'react-router-dom';
import { Main } from './components/Main';
import { CountryInfo } from './components/CountryInfo';


function App() {
  const dispatch = useDispatch(); 
  const isDark = useSelector((state) => state.darkMode);
  const body = document.querySelector('body');
  
  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://restcountries.com/v3.1/all');
      const countries = await res.json();
      if (!ignore) {
        dispatch(setAll(countries));
      }
    }
    let ignore = false;
    getData();
    return () => ignore = true
  }, []);

  useEffect(()=> {
    isDark ? body.classList.add('dark') : body.classList.remove('dark');
  }, [isDark])

  return (<>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/:id' element={<CountryInfo/>} />
      </Routes>
   </>
  );
}

export default App;
