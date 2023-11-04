const url = 'https://www.google.com'
const option = {
  method: 'GET',
}

fetch(url)
.then(r => r.text())
.then(text =>{
  console.log(text)
})