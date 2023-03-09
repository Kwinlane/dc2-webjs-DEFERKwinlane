let elt = document.getElementById('main');
elt.innerHTML = "<div><li>Division1</li></div><div><li>Division2</li></div><div><li>Division3</li></div>" ;

const newElt = document.createElement('div');
newElt.innerHTML = "<div><li>Division4</li></div><div><li>Division5</li></div><div><li>Division6</li></div>"
elt.appendChild(newElt);


const newSec = document.createElement('section');
newSec.innerHTML = "<span><li>span1</li></span>";
elt.replaceChild(document.createElement("section"), newElt);

let exo1 = {
    difficulty : "easy",
    line : 4,
};

let objLinea = JSON.stringify(exo1);
localStorage.setItem("obj",objLinea);

objLinea = localStorage.getItem("obj");
exo1 = JSON.parse(objLinea);


console.log(objLinea)

let nameInput = document.getElementById('name');
let register = document.getElementById('register')
register.addEventListener('click', function(){
    let name = nameInput.value;
    localStorage.setItem("nom", name)
});

let removeData = document.getElementById('display')
removeData.addEventListener('click', function(){
    localStorage.clear();
})
