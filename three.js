//code snippet
const url = window.location.href.split('?')[1]
const usp = new URLSearchParams(url)
const text= document.querySelector('p')

usp.forEach(function(value) {
    if(value=== 'returning'){
        text.textContent= 'Welcome back!'
        }
  });



