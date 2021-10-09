
const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  previousNum: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  },

  //pop up that prompts user to enter the number
  getGuesses = prompt(`Enter a guess between [smallestNum] and [biggestNum]:`)
}

