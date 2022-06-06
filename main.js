import { API_KEY, BASE_URL, IMG_URL, language, } from './api.js'

function random() {
  var random = Math.random() * 5000;
  return Math.round(random);


}


const filme = (random())
var url = BASE_URL + filme +'?api_key='+ API_KEY



function getFilme() {
  axios.get(url)
    .then(response => {
      const data = response.data

    })
    .catch(error => console.log(error))
}

console.log(getFilme())
