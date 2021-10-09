
const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  previousNum: [],
  getGuesses: function() {
    prompt(`Enter a guess between ${game.smallestNum} and ${game.biggestNum}:`)
  },
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      game.getGuesses()
  },

  //pop up that prompts user to enter the number
  
}
