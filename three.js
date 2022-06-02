//code snippet
const url = window.location.href.split('?')[1]
const usp = new URLSearchParams(url)
const content = usp.get('content')
const text= document.querySelector('p')
if(content=== 'returning'){
text.textContent= 'Welcome back!'
}


