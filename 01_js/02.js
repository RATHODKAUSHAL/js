// function addLanguage  (langName){
//     const li = document.createElement('li');
//     // li.innerHTML = `${langName}` ==================OR==============
//     li.appendChild(document.createTextNode(langName))
//     document.querySelector('.language').appendChild(li)
// }
// addLanguage("python")
// addLanguage("java")
// addLanguage("cpp")   

const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach(function (button) {
    button.addEventListener('click', function(e){
        if(e.target.id === "grey"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "white"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "blue"){
            body.style.backgroundColor = e.target.id;
        }
    })
})