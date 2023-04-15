/*Personal Api key:
7f9f2c096c04f228306760754dd17a92*/

let autor = document.querySelector('#aboutAuthor');
let form1 = document.querySelector('#form');
//API urls
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=7f9f2c096c04f228306760754dd17a92&query="';
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7f9f2c096c04f228306760754dd17a92&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';


let searchField = document.querySelector('#search');
let form = document.querySelector('#form');
let main = document.querySelector('#main');

//Show the movies list once the page is loaded
getMovies(API_URL);

//function to get movies list, either by search api or for just showing in when the page load.
async function getMovies(url){

        const res = await fetch(url);
        const data = await res.json();

            //this method is in charge of creating a list of the possible movies, so we pass the arrays for it to work with it
                showMovies(data.results);
}

//we receive the data already process by the fetch method called inside getMovies(). and since its an array of objects, we are goingt o work with it
function showMovies(movies){
    main.innetHtml = '';

        movies.forEach((movie=>{

            /*lets only get the attributes with need:
        * Remember that movies is an array of objects, so we are going to take it and work with it
        * this title, poster_path, are atributes from the objects, we are making sure to retrieve from the array only these*/
            const {title, poster_path, vote_average, overview} = movie;

                /*Lets create a singular div for the current data to be put inside*/
                const movieEl = document.createElement('div');
                movieEl.classList.add('movie');

                    //now we are about to do som DOM handle pretty cool:
                        movieEl.innerHTML = `
                            <img src="${IMG_PATH + poster_path}" alt="${title}">

                        `;
                        main.appendChild(movieEl);
                        console.log(title);
                           
                        
                        
                        

        }));
        

}


//after click on autor, button call an anonimous function, and show author (me) name and info
autor.addEventListener('click', ()=>{
    

    let divAutorInformation = document.createElement('div');
        if(divAutorInformation.innerHTML===''){
            divAutorInformation.classList.add('authorInfo');
            divAutorInformation.innerHTML = '<h4>Ricardo Collado Rothschild<hr></h4> <p>Contacto <br>ricardocolladorothschild@gmail.com <br>[849-711-0425]</p><p>Frontend developer</p> ';
            form1.append(divAutorInformation);
            setTimeout(() => {
                divAutorInformation.classList.add('NoShowauthorInfo');
              }, 7500); // 
        }


});