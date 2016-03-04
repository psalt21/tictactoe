
var grid = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

var possibleWins = [
  [[0,0], [0,1], [0,2]],
  [[1,0], [1,1], [1,2]],
  [[2,0], [2,1], [2,2]],
  [[0,0], [1,0], [2,0]],
  [[0,1], [1,1], [2,1]],
  [[0,2], [1,2], [2,2]],
  [[2,0], [1,1], [0,2]],
  [[0,0], [1,1], [2,2]]
];

var colors = ['#FF6060', '#4D4DFF'];
var letters = ['X', 'O'];
var i = 0;
var currentLetter = 0;
var numberOfTurns = 0;


// function test(blockName){
  // document.getElementById(blockName).innerText = grid[blockName[0]][blockName[2]];
// }

function changeBlock(blockName){
  if(grid[blockName[0]][blockName[2]] == ''){
    addToGridArray(blockName);
  }else{
    swal('This spot is already taken! Please choose another.')
  }

  function chooseLetter(blockName){
    document.getElementById(blockName).innerText = letters[currentLetter];
    changeColor(blockName);
    checkForWin();
    currentLetter++;
    if(currentLetter >= letters.length){
      currentLetter=0;
    }
    numberOfTurns++;
    verifyTurn();
  }


  function addToGridArray(blockName){
    grid[blockName[0]][blockName[2]] = letters[currentLetter];
    console.log(grid);
    chooseLetter(blockName);
  }

  function changeColor(blockName){
    document.getElementById(blockName).style.backgroundColor = colors[i];
    i++;
    if(i >= colors.length){
      i=0;
    }
  }
}
function clearGrid(){
    grid = [['0', '0', '0'],['0', '0', '0'],['0', '0', '0']];
    document.getElementById('0-0').innerText = '';
    document.getElementById('0-0').style.backgroundColor = '#C7C7C7';
    console.log(grid);
  }
function verifyTurn(){
  if(numberOfTurns === 9){
    swal('Cats game! It\'s a tie!');
  }
}
function checkForWin(){
  // if(grid[0][0] == letters[j] && grid[0][1] == letters[j] && grid[0][2] == letters[j]){
    // alert(letters[j] + ' wins!');
  // }
  var index0 = 0;
  var index1 = 1;
  var letterIsTrue = true;

  for(var i = 0; i < possibleWins.length; i++){
    for(var j = 0; j < possibleWins[i].length; j++){
      if(grid[possibleWins[i][j][index0]][possibleWins[i][j][index1]] == letters[currentLetter]){
        letterIsTrue = true;
      }else{
        letterIsTrue = false;
        break;
      }
    }
    if(letterIsTrue === true){
      // alert(letters[currentLetter] + ' wins!');
      swal(letters[currentLetter] + ' wins!');
    }
  }
}
