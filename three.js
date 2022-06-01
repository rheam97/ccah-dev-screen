//code snippet

const url = window.location.href
const text= document.querySelector('p')
if(url.split('=')[1]=== 'returning'){
text.innerHTML= 'Welcome back!'
}


