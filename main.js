import { API_KEY, BASE_URL, IMG_URL, language, } from './api.js'

function random() {
  var random = Math.random() * 10000;
  return Math.round(random);

}

const filme = (random())
var url = BASE_URL + filme +'?api_key='+ API_KEY + '&' + language

function getFilme() {
  axios.get(url)
    .then(response => {
      const data = response.data
      data.textContent = JSON.stringify(data)
      console.log(response)


      title.textContent = data.title
      descricao.textContent = data.overview
      poster.src = IMG_URL + data.poster_path
      
    })
    .catch(error => location.reload(getFilme))
}


console.log(getFilme())

var btn = document.querySelector("#reload");
btn.addEventListener("click", function() {
    
    location.reload(getFilme);
});




