
const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  previousNum: [],
  getGuesses: function() {
    
  let yourGuess = prompt(`Enter a guess between ${game.smallestNum} and ${game.biggestNum}:`)

  yourGuess = parseInt(yourGuess, 10)


    if (yourGuess === game.secretNum) {
      alert('i guess it works')
      } else if (yourGuess < this.secretNum) {
        console.log('Too low try again')
      } else if (yourGuess > this.secretNum) {
        console.log('Too high try again')
      } else if (yourGuess !== Number) {
        console.log('You did not use a number')
      } 
      
      else {
        return yourGuess
      }
      
      

  },


  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    game.getGuesses()
  },

  //pop up that prompts user to enter the number
  
}
