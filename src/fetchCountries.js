import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';

defaultModules.set(PNotifyMobile, {});

alert({
  text: 'Too many matches found. Please enter a more specific query!',
});

const refs = {
  input: document.getElementById('input-id'),
  countriesList: document.getElementById('countries'),
};

refs.input.addEventListener('input', fetchCountries);

function fetchCountries(e) {
  // if
  const query = e.target.value;
  if (query) {
    fetch(`https://restcountries.eu/rest/v2/name/${query}`)
      .then(response => {
        return response.json();
      })
      .then(countries => {
        const countriesHTML = countries.map(country => `<h6>${country.name}</h6>`).join('');
        refs.countriesList.insertAdjacentHTML('afterbegin', countriesHTML);
      })
      .catch(console.error);
  }
}
