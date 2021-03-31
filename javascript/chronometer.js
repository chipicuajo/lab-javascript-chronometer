class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      // if(this.currentTime == 1){
      //   callback()
      // }
    

  }, 1000)
  }
  getMinutes() {
    let minutes = Math.floor(this.currentTime/60)
    this.intervalId = setInterval(()=>{
      if(this.currentTime % 60 == 0){
        minutes++
      }
    },1000)
    return minutes
  }
  getSeconds() {
    let seconds = this.currentTime
    this.intervalID = setInterval(()=>{
      seconds++
    },1000 )
    if(seconds>=59){
      return seconds-60 
    }
    return seconds
    
  }
  twoDigitsNumber() {
    // ... your code goes here
  }
  stopClick() {
    // ... your code goes here
  }
  resetClick() {
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
  }
}
