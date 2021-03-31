class Chronometer {
  constructor() {
    this.currentTime = 0; 
    this.intervalId = 0; 
    this.currentTimeMs = 0;
  }

  
  startClick(printTime) {
    
    this.intervalId = setInterval( () => {
      this.currentTime++; 
      if (printTime) printTime();
    }, 1000);
    this.intervalIdMs = setInterval( () => {
      this.currentTimeMs++; 
      if (printTime) printTime();
    }, 10);
  }

  
  getMinutes() {
    let currentTimeMin = Math.floor(this.currentTime / 60);
    return currentTimeMin;
  }

  
  getSeconds() {
    let currentTimeSec = this.currentTime % 60;
    return currentTimeSec;
  }

  getMilliSeconds() {
    let currentTimeMs = this.currentTimeMs%1000;     
      return currentTimeMs;     
    
  }


  
  
  twoDigitsNumber(num) {
    let twoDigits = ("0" + num).slice(-2); // Example: if num is 2, twoDigits will be "02".
    return twoDigits
  }

  
  stopClick() {
    
    clearInterval(this.intervalId);
    clearInterval(this.intervalIdMs);
    
  }
  
   

  
  resetClick() {
    this.currentTime = 0
 }
 resetClickMs(){
   this.currentTimeMs = 0;
 }

  
  splitClick() {
    let minutes = this.twoDigitsNumber(this.getMinutes());
    let seconds = this.twoDigitsNumber(this.getSeconds());
    let milliSeconds = this.twoDigitsNumber(this.getMilliSeconds());
    return `${minutes}:${seconds}:${milliSeconds}`;
  }
}