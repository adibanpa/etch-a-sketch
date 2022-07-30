const container = document.querySelector('#container')
let gridsize = prompt("Enter grid size (maximum = 100)")

if (gridsize > 100) {
  gridsize = 100
}

for (let i = 0; i < gridsize; i++){

  const rowdiv = document.createElement("div");
  rowdiv.setAttribute('id', `${i+1}`);
  rowdiv.classList.add('rows');
  container.appendChild(rowdiv);

  for (let j = 0; j < gridsize; j++){

    const coldiv = document.createElement("div");
    coldiv.setAttribute('id', `${j+1}`);
    coldiv.textContent = `${j+1}`;
    coldiv.classList.add('cols');
    coldiv.addEventListener('mouseover', function(e) {
      e.target.style.background = 'yellow';
    });
    rowdiv.appendChild(coldiv);

  }
}

function resett(){
  const cells = document.querySelectorAll('.cols');
  
}

// const cells = document.querySelectorAll('.cols');
// cells.addEventListener('hover', function(e) {
//   e.target.style.background = 'yellow';
// });