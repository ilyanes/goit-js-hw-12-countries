// import _ from 'lodash';
// // import { debounce } from 'lodash/debounce';
// import { alert, defaultModules } from '@pnotify/core';
// import '@pnotify/core/dist/PNotify.css';
// import * as PNotifyMobile from '@pnotify/mobile';
// import '@pnotify/mobile/dist/PNotifyMobile.css';
// import '@pnotify/core/dist/BrightTheme.css';

// defaultModules.set(PNotifyMobile, {});

// const refs = {
//   input: document.getElementById('input-id'),
//   countriesList: document.getElementById('countries'),
// };

// const debounceInput = _.debounce(fetchCountries, 500);

// refs.input.addEventListener('input', debounceInput);

// function fetchCountries(searchQuery) {
//   // if
//   const query = searchQuery.target.value;
//   if (query) {
//     fetch(`https://restcountries.eu/rest/v2/name/${query}`)
//       .then(response => {
//         return response.json();
//       })
//       .then(countries => {
//         console.log(countries.length);
//         const countriesHTML = countries.map(country => `<h6>${country.name}</h6>`).join('');
//         alert({
//           type: 'notice',
//           text: 'Too many matches found. Please enter a more specific query!',
//         });
//         refs.countriesList.insertAdjacentHTML('afterbegin', countriesHTML);
//       })
//       .catch(console.error);
//   }
// }
export default function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  return fetch(url)
    .then(resp => resp.json())
    .catch(() => errorServerMessage());
}
