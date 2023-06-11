# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). 
## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode

### Links

- Solution URL: [https://github.com/AnatolyZZZ/countries]
- Live Site URL: [https://anatolyzzz.github.io/countries/]

## My process

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I've learnd how to make day/night modes. More generaly I improved my knolage of CSS variables. 
I've learneg more deeply about useEffect hook, clenaup function  and better way to fetch data in useEffect. 
Also I improved my understanding of debonce technique what allowed me to filter items more smoothly when entering smth in searchinput 


```css
body.dark {
  --background-color: hsl(207, 26%, 17%);
  --text-color: hsl(0, 0%, 100%);
  --element-color: hsl(209, 23%, 22%);
  --input-color: hsl(0, 0%, 100%);
  --shadow: none;
  --down-shadow :none;
  --right-shadow : none;
  --header-shadow: none;
}
```
```js
useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://restcountries.com/v3.1/all?fields=name,population,languages,flags,currencies,region,subregion,capital,tld,borders,cca3');
      const countries = await res.json();
      if (!ignore) {
        dispatch(setAll(countries));
      }
    }
    let ignore = false;
    getData();
    return () => ignore = true
  }, []);

const debounce = function(fn, t) {
    let stoptime = Date.now() + t;
    let timer;
    return function(...args) {
        if (Date.now() <= stoptime) {
            clearTimeout(timer);
        }
        /// as we need array for setDisplay
        timer = setTimeout(()=> fn([...args]), t);
        stoptime  = Date.now() + t;
    }
};

const setDebounced = debounce(setDisplay, 700);

const filterCards = () => {
        setDebounced(...allCountries.filter(filterByRegion).filter(filterByName))
    }
useEffect (()=>{filterCards()},[searchField, filterRegion, allCountries]);
```
