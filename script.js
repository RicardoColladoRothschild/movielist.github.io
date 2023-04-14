/*Personal Api key:
7f9f2c096c04f228306760754dd17a92*/

let autor = document.querySelector('#aboutAuthor');

//API REST DATA:
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=7f9f2c096c04f228306760754dd17a92&query="';
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7f9f2c096c04f228306760754dd17a92&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';




//after click on autor, button call an anonimous function, and show author (me) name and info
autor.addEventListener('click', ()=>{
    let divAutorInformation = document.createElement('div');
    console.log('rickyboy');

});