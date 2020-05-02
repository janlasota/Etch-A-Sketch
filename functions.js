function genDivs(x){
  for(var i = 0; i < x; i++){
    for(var j = 0; j < x; j++){
      var gridItem = document.createElement('div');
      gridItem.className = 'grid-item';
      var gridItemHeight = (860 / x);
      var gridItemWidth = (860 / x);
      gridItem.style.height = gridItemHeight + "px";
      gridItem.style.width = gridItemWidth + "px";
      document.getElementById('grid-container').appendChild(gridItem);
    }
  }
}

/* removes first element of array and array continues to shrink */
function clearGrid(){
  var elements = document.getElementsByClassName('grid-item');
  while(elements.length > 0){
    elements[0].parentNode.removeChild(elements[0]);
  }
  gridSize();
}

function gridSize(){
  var size = prompt("How many squares would you like? e.g., 5x5"
  + " (just type one number, 100 or less for best results)");
  genDivs(size);
}

document.addEventListener("DOMContentLoaded", function() {
  genDivs(16);
});

/* e.target refers to the elements that are hovered over*/
var hoverContainer = document.getElementById('grid-container');
hoverContainer.addEventListener('mouseover', function(e) {
  const gridItem = e.target.closest('.grid-item');
  if (gridItem) gridItem.classList.add('hoverColor');
});

var clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', function() {
  clearGrid();
});

/* erase functionality*/
document.addEventListener('mousedown', function(e) {
  if (e.which == 1){
    hoverContainer.addEventListener('mouseover', function(e) {
      const gridItem = e.target.closest('.grid-item');
      if (gridItem) gridItem.classList.remove('hoverColor');
    })
  }
});

/* toggles back to coloring*/
document.addEventListener('mouseup', function(e) {
  if (e.which == 1){
    hoverContainer.addEventListener('mouseover', function(e) {
      const gridItem = e.target.closest('.grid-item');
      if (gridItem) gridItem.classList.add('hoverColor');
    })
  }
});
