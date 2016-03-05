
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
var currentColor = 0;
var currentLetter = 0;
var numberOfTurns = 0;
var keepPlaying = true;


// function test(blockName){
  // document.getElementById(blockName).innerText = grid[blockName[0]][blockName[2]];
// }

function changeBlock(blockName){

  if(keepPlaying === false){
    swal('We already have a winner, click \"Reset Game\" to play again!')
  }else{
    if(grid[blockName[0]][blockName[2]] == '' && keepPlaying === true){
      addToGridArray(blockName);
    }else{
      swal('This spot is already taken! Please choose another.')
    }
  }

  function addLetter(blockName){
    document.getElementById(blockName).innerText = letters[currentLetter];
    changeColor(blockName);
    numberOfTurns++;
    checkForWin();
    currentLetter++;
    if(currentLetter >= letters.length){
      currentLetter=0;
    }
    console.log(numberOfTurns);
    // checkCatsGame();
  }


  function addToGridArray(blockName){
    grid[blockName[0]][blockName[2]] = letters[currentLetter];
    console.log(grid);
    addLetter(blockName);
  }

  function changeColor(blockName){
    document.getElementById(blockName).style.backgroundColor = colors[currentColor];
    currentColor++;
    if(currentColor >= colors.length){
      currentColor=0;
    }
  }
}

function checkCatsGame(){
  if(numberOfTurns === 9){
    swal('Cat\'s game! It\'s a tie! Click \"Reset Game\" to play again.');
  }
}

function checkForWin(){
  var letterContribsToWin = true;
  var winner = false;

  for(var i = 0; i < possibleWins.length; i++){
    for(var j = 0; j < possibleWins[i].length; j++){
      if(grid[possibleWins[i][j][0]][possibleWins[i][j][1]] == letters[currentLetter]){
        letterContribsToWin = true;
      }else{
        letterContribsToWin = false;
        break;
      }
    }
    if(letterContribsToWin === true){
      winner =true;
      swal(letters[currentLetter] + ' wins!');
      keepPlaying = false;
      break;
    }
  }
  if (!winner){
    checkCatsGame();
  }
}

function clearGrid(){
  for(var i = 0; i < grid.length; i++){
    for(var j = 0; j < grid[i].length; j++){
      document.getElementById(i + '-' + j).innerText = '';
      document.getElementById(i + '-' + j).style.backgroundColor = '#C7C7C7';
    }
    grid = [['', '', ''],['', '', ''],['', '', '']];
    keepPlaying = true;
    numberOfTurns = 0;
    currentLetter = 0;
    currentColor = 0;
  }
}
