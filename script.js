let elt = document.getElementById('main');
elt.innerHTML = "<div><li>Division1</li></div><div><li>Division2</li></div><div><li>Division3</li></div>" ;

const newElt = document.createElement('div');
newElt.innerHTML = "<div><li>Division4</li></div><div><li>Division5</li></div><div><li>Division6</li></div>"
elt.appendChild(newElt);
