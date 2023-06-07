import './App.css';
import { useEffect } from 'react';
import { setAll } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from './components/Header';

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
   </>
  );
}

export default App;