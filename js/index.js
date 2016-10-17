var timeInterval;
var modeVal = 0;

function giveInput() {
  var hours = document.getElementById('hours').value;
  if (hours === '') {
    hours = 0;
  }
  var minutes = document.getElementById('minutes').value;
  if (minutes === '') {
    minutes = 0;
  }
  var seconds = document.getElementById('seconds').value;
  if (seconds === '') {
    seconds = 0;
  }

  var nowCheck = new Date();

  if (hours === 0 && minutes === 0 && seconds === 0) {
    alert("Please enter a value");

  } else if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
    alert("Please enter a number");

  } else if (hours < 0 || hours > 23) {
    alert("Please enter a number between 0 and 24 for hours");

  } else if (minutes < 0 || minutes > 60) {
    alert("Please enter a number between 0 and 60 for minutes");

  } else if (seconds < 0 || seconds > 60) {
    alert("Please enter a number between 0 and 60 for seconds");

  } else if ((modeVal == 0) && ((hours < nowCheck.getHours()) || (hours == nowCheck.getHours() && minutes < nowCheck.getMinutes()))) {
    alert("Please enter a time in the future");

  } else {
    if (modeVal == 0) {
      startClock(hours, minutes, seconds, 'time');
    } else {
      startTimer(hours, minutes, seconds, 'time');
    }
    $('#inputBox').hide();
    $('#instructBox').hide();
    $('#timeBox').show();
    $('#stopButton').show();
  }

  //      console.log(hours, minutes, seconds);
}

function startClock(h, m, s, id) {

  var clock = document.getElementById(id);
  var clockEnd = document.getElementById('timeEnd');

  var today = Date.today().toString('MMM dd yyyy');
  var inputTime = Date.parse(Date.today().toString('MMM dd yyyy') + ' ' + h + ':' + m + ':' + s);
  var remain = Math.floor((Date.parse(inputTime) - Date.parse(new Date())) / 1000);

  if (remain <= 0) {
    remain = 1;
  }

  //console.log("today = " + today);
  //console.log("inputTime = " + inputTime);
  //console.log("remain = " + remain);

  //var total = +h * 3600 + +m * 60 + +s;
  //console.log("total time = " + total)

  clockEnd.innerHTML = checkTime(+h) + ":" + checkTime(+m) + ":" + checkTime(+s);

  var timer = remain,
    hours, minutes, seconds, count;

  if (timeInterval) {
    stopTimer();
  }
  timeInterval = setInterval(function() {

    var now = new Date();
    //console.log("now = " + now);
    hours = now.getHours();
    //console.log("remaining time = " + timer);
    minutes = now.getMinutes();
    seconds = now.getSeconds();

    clock.innerHTML = checkTime(hours) + ":" + checkTime(minutes) + ":" + checkTime(seconds);

    var elem = document.getElementById("curProgress");
    var width = Math.round(((remain - timer) / remain) * 100);

    width++;
    elem.style.width = width + '%';

    if (--timer < 0) {
      clearInterval(timeInterval);
      alert("Time is up!");
      $('#inputBox').show();
      $('#stopButton').hide();
    }
  }, 1000);

}

//function for countdown timer to be implemented in the future

function startTimer(h, m, s, id) {

  var clock = document.getElementById(id);
  var clockEnd = document.getElementById('timeEnd');

  var total = +h * 3600 + +m * 60 + +s;
  //console.log("total time = " + total)
  var timer = total,
    hours, minutes, seconds;

  if (timeInterval) {
    stopTimer();
  }
  timeInterval = setInterval(function() {

    var t = parseInt(timer, 10);
    hours = Math.floor(t / (60 * 60));

    minutes = Math.floor((t / 60) % 60);

    seconds = Math.floor(t % 60);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    clock.innerHTML = hours + ":" + minutes + ":" + seconds;
    clockEnd.innerHTML = checkTime(+h) + ":" + checkTime(+m) + ":" + checkTime(+s);

    var elem = document.getElementById("curProgress");
    var width = Math.round(((total - timer) / total) * 100);

    width++;
    elem.style.width = width + '%';

    if (--timer < 0) {
      clearInterval(timeInterval);
      alert("Time is up!");
      $('#inputBox').show();
      $('#stopButton').hide();
    }
  }, 1000);

}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function stopTimer() {
  if (timeInterval) {
    clearInterval(timeInterval);
  }

  $('#inputBox').show();
  $('#instructBox').show();
  $('#stopButton').hide();
}

function countDown() {
  document.getElementById("stopWatch").style.backgroundColor = "#AAA";
  document.getElementById("countDown").style.backgroundColor = "#515151";
  modeVal = 1;

}

function stopWatch() {
  document.getElementById("stopWatch").style.backgroundColor = "#515151";
  document.getElementById("countDown").style.backgroundColor = "#AAA";
  modeVal = 0;

}