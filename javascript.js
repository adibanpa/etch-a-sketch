function setGrid(gridsize=16) {

  const container = document.querySelector('#container')

  for (let i = 0; i < gridsize; i++){

    const rowdiv = document.createElement("div");
    rowdiv.setAttribute('id', `${i+1}`);
    rowdiv.classList.add('rows');
    container.appendChild(rowdiv);

    for (let j = 0; j < gridsize; j++){

      const coldiv = document.createElement("div");
      coldiv.setAttribute('id', `${j+1}`);
      coldiv.classList.add('cols');
      // coldiv.textContent = 'H';
      coldiv.addEventListener('mouseover', function(e) {
        e.target.style.background = 'yellow';
      });
      rowdiv.appendChild(coldiv);

    }
  }
    
}

function resett(){
  const cells = document.querySelectorAll('.cols');
  cells.forEach((cell) => {
    cell.style.background = 'dodgerblue';
  })
}

setGrid()

function clickme(){
  document.querySelector('#container').innerHTML="";

  let grdsize = prompt("Enter grid size (Maximum of 100)");
  if (grdsize > 100 ) {
    grdsize = 100;
  }
  setGrid(grdsize);
}