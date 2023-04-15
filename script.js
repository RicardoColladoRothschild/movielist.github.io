/*Personal Api key:
7f9f2c096c04f228306760754dd17a92*/

let autor = document.querySelector('#aboutAuthor');
let form1 = document.querySelector('#form');
//API urls
const Api_responds_search = 'https://api.themoviedb.org/3/search/movie?api_key=7f9f2c096c04f228306760754dd17a92&query="';
const API_Main_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7f9f2c096c04f228306760754dd17a92&page=1';
const ruta_imagen = 'https://image.tmdb.org/t/p/w1280';


const search = document.getElementById('search')
let form = document.querySelector('#form');
const main = document.getElementById('main');

//Show the movies list once the page is loaded
getMovies(API_Main_URL);

//function to get movies list, either by search api or for just showing in when the page load.
async function getMovies(url){

        const res = await fetch(url);
        const data = await res.json();

            //this method is in charge of creating a list of the possible movies, so we pass the arrays for it to work with it
                showMovies(data.results);
}

//we receive the data already process by the fetch method called inside getMovies(). and since its an array of objects, we are goingt o work with it
function showMovies(movies){
    main.innerHTML = '';

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
                            <img src="${ruta_imagen + poster_path}" alt="${title}">
                                <div class="movie-info">
                                    <h3>${title}</h3>
                                        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
                                
                                </div>
                                <div class="overview">
                                    <h3>Overview</h3>
                                    ${overview}
                                </div>
                        `;
                        main.appendChild(movieEl);
                        console.log(title);
                           
                        
                        
                        

        }));
        

}

/*Among the information with fetch from the api, there is a average vote information, we are going to give different color
depending on the score, by creating a method that return the color nme, then on he css, we are going to create a class using that name
and provide color to a text (or numbers)*/
function getClassByRate(vote){
    if(vote>=8){
        return 'green';
    }else if(vote>=5){
        return 'orange';
    }else{
        return 'red';
    }
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

form.addEventListener('submit',(event)=>{
    //avoiding reload
    event.preventDefault();

    const searchTerm = search.value;

        if(searchTerm && searchTerm !==''){
            
            getMovies(Api_responds_search + searchTerm);
            search.value = '';
        }else{
            window.location.reload();
        }

});