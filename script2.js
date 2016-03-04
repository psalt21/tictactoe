
var grid = [['B', 'Q'],[],[]]
var colors = ['#FF6060', '#4D4DFF'];
var letters = ['X', 'O'];
var i = 0;
var j = 0;

function test(testInput){
  document.getElementById(testInput).innerText = grid[testInput[0]][testInput[2]];
}

function changeBlock(squareName){
  changeColor(squareName);
  changeLetter(squareName);
  function changeColor(squareName){
    document.getElementById(squareName).style.backgroundColor = colors[i];
    i++;
    if(i >= colors.length){
      i=0;
    }
  }
  function changeLetter(squareName){
    document.getElementById(squareName).innerText = letters[j];
    j++;
    if(j >= letters.length){
      j=0;
    }
  }
}

function clearGrid(){

}
