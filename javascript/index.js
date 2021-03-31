const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  this.printMinutes()
  this.printSeconds()
  
}

function printMinutes() {
    let mins= chronometer.twoDigitsNumber(chronometer.getMinutes())
    minUni.innerText = mins[1]
    minDec.innerText = mins[0]
}
  

function printSeconds() {
  
    let secs= chronometer.twoDigitsNumber(chronometer.getSeconds())
    secUni.innerText = secs[1]
    secDec.innerText = secs[0]

    
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  
  let splitList = document.createElement("li")
  splits.appendChild(splitList)
  splitList.innerText = chronometer.splitClick()
 
  
}

function clearSplits() {
  
  splits.innerHTML = ""
}

function setStopBtn() {
  btnLeft.innerText = "STOP"
  btnLeft.classList.value ='btn stop'
}

function setSplitBtn() {
  btnRight.classList.value = 'btn split'
  btnRight.innerText = "SPLIT"
}

function setStartBtn() {
  btnLeft.classList.value = 'btn start'
  btnLeft.innerText = "START"
}

function setResetBtn() {
  btnRight.classList.value = 'btn reset'
  btnRight.innerText = "RESET"
  secUni.innerText = "0"
  secDec.innerText ="0"
  minDec.innerText = "0"
  minUni.innerText = "0"
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
    
    if(btnLeft.classList.value == "btn start"){
      chronometer.startClick(this.printTime)
      setStopBtn()
      setSplitBtn()

    }else{
      chronometer.stopClick()
      setStartBtn()
      setResetBtn()
      
      }
    }

);

// Reset/Split Button
btnRight.addEventListener('click', () => {
 if(btnRight.classList.value == 'btn reset'){
    this.clearSplits()
    chronometer.resetClick()
    
  }else{
   this.printSplit()
 }
});
