
const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  previousNum: [],
  getGuesses: function() {
    
  let yourGuess = prompt(`Enter a guess between ${game.smallestNum} and ${game.biggestNum} (your previous guesses -- ${game.previousNum}):`)
  game.previousNum.push(yourGuess)
  yourGuess = parseInt(yourGuess, 10)


    if (yourGuess === game.secretNum) {
      alert(`i guess you are quite a smart person in the works. You guessed ${game.previousNum.length} times`)
      } else if (yourGuess < this.secretNum) {
        alert(`Too low try again. Your previous guesses: ${game.previousNum}`)
        
        this.getGuesses()
      } else if (yourGuess > this.secretNum) {
        alert(`Too high try again. Your previous guesses: ${game.previousNum}`)
        
        this.getGuesses()
      } else if (yourGuess !== Number) {
        alert('You did not use a number')
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

game.play()
