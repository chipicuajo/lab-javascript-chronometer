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
    console.log(minutes)
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
    console.log(seconds)
    return seconds
    
  }
  twoDigitsNumber() {
    this.intervalId = setInterval(()=>{
      if(seconds>9){
        seconds = ("0" + seconds).slice(-2);
      }
      if(minutes>9){
       
      minutes = ("0" + minutes).slice(-2);
      }

  }, 1000)
  
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
