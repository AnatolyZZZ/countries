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
      try {
        const res = await fetch('https://restcountries.com/v3.1/all?fields=name,population,languages,flags,currencies,region,subregion,capital,tld,borders,cca3');
        const countries = await res.json();
        if (!ignore) {
          dispatch(setAll(countries));
        }
      } catch (error) {
        console.log('error occured', error)
      }
    }
    let ignore = false;
    getData();
    return () => ignore = true
  }, [dispatch]);

  useEffect(()=> {
    isDark ? body.classList.add('dark') : body.classList.remove('dark');
  }, [isDark, body.classList])

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
