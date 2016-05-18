/*
 * a bit of JS written by Sam Whiteley to do neat things.
 */

var makeLight = function() {
  var e = document.querySelector('.dark');
  while(e !== null) {
    e.className = e.className.replace(/(?:^|\s)dark(?!\S)/g, ' light');
    e = document.querySelector('.dark');
  }
  if(clientLocation !== null) {
    setSwitch(clientLocation);
  }
};

var makeDark = function() {
  var e = document.querySelector('.light');
  while(e !== null) {
    e.className = e.className.replace(/(?:^|\s)light(?!\S)/g, ' dark');
    e = document.querySelector('.light');
  }
  if(clientLocation !== null) {
    setSwitch(clientLocation);
  }
};

var initialSet = function(loc) {
  var now = new Date();
  var sunTimes = SunCalc.getTimes(now, loc.coords.latitude, loc.coords.longitude);

  if(now.getTime() >= sunTimes.sunset.getTime() || now.getTime() < sunTimes.sunrise.getTime()) {
    makeDark();
  }
  setSwitch(loc);
};

var setSwitch = function(loc) {
  var now = new Date();
  var sunTimes = SunCalc.getTimes(now, loc.coords.latitude, loc.coords.longitude);
  var time = 0;

  if(now.getTime() < sunTimes.sunrise.getTime()){
    time = sunTimes.sunrise.getTime() - now.getTime();
    window.setTimeout(makeLight, time);
  } else if (now.getTime() < sunTimes.sunset.getTime()) {
    time = sunTimes.sunset.getTime() - now.getTime();
    window.setTimeout(makeDark, time);
  } else {
    var tomorrow = new Date();
    tomorrow.setDate(now.getDate() + 1);
    sunTimes = SunCalc.getTimes(tomorrow, loc.coords.latitude, loc.coords.longitude);
    time = sunTimes.sunrise.getTime() - now.getTime();
    window.setTimeout(makeLight, time);
  }
};

var clientLocation = null;

if('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(function(position) {
    clientLocation = position;
    initialSet(position);
  });
}

