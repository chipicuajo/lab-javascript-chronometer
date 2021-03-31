class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      
    

  }, 1000)
  }
  getMinutes() {
    let minutes = Math.floor(this.currentTime/60)
    this.intervalId = setInterval(()=>{
      if(this.currentTime % 60 == 0){
        minutes++
      }
    },1000)
    if(this.currentTime = 0){
      minutes = 0
    }
    return minutes
  }
  getSeconds() {
    let seconds = this.currentTime
    this.intervalId = setInterval(()=>{
      seconds++
    },1000 )
    if(seconds>=59){
      return seconds-60 
    }
    console.log(seconds)
    return seconds
    
  }
  twoDigitsNumber() {
    let twoDig  = ""
    for(let i=0; i<=1;i++){
      if(this.currentTime<9){
        twoDig = "0" + this.currentTime
      }else{
        twoDig = this.currentTime.toString();
      }
    }
    return twoDig
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
    clearInterval(this.intervalId)

  }
  splitClick() {
    
  }
}
