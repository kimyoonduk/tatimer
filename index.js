var timeInterval;

function giveInput() {
  var hours = document.getElementById('hours').value;
  var minutes = document.getElementById('minutes').value;
  var seconds = document.getElementById('seconds').value;
  
  if(hours.length == 0 && minutes.length == 0 && seconds.length == 0) {
    alert("Please enter a value");
  }
  else if(isNaN(hours) || isNaN(minutes) || isNaN(seconds)){
	  alert("Please enter a number");
	}
  else if(hours < 0){
	  alert("Please enter a number greater than 0 for hours");
	}
  else if(minutes < 0 || minutes > 60){
	  alert("Please enter a number between 0 and 60 for minutes");
	}
  else if(seconds < 0 || seconds > 60){
	  alert("Please enter a number between 0 and 60 for seconds");
	}
  
  else {
      startTimer(hours, minutes, seconds, 'time');
    $('#inputBox').hide();
$('#stopButton').show();

//      console.log(hours, minutes, seconds);
  }
}


function startTimer(h, m, s, id) {

  var clock = document.getElementById(id);

  var total = +h*3600 + +m*60 + +s;
  console.log("total time = "+ total)
  var timer = total, hours, minutes, seconds;
  
  
  if(timeInterval){
    stopTimer();
  }
  timeInterval = setInterval(function () {
          
    var t = parseInt(timer, 10);
    hours = Math.floor(t/(60*60));

    minutes = Math.floor( (t/60) % 60 );;
          
    seconds = Math.floor( t % 60 );;
    
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    clock.innerHTML = hours + ":" + minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(timeInterval);
      alert("Time is up!")
      $('#inputBox').show();
$('#stopButton').hide();
    }
  }, 1000);

}


function stopTimer() {
  if(timeInterval) {
    clearInterval(timeInterval);
  }
    
    $('#inputBox').show();
$('#stopButton').hide();
  }