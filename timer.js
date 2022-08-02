function countDown(){
    var now = new Date();
    //7 is august here index is taken
    var countDate = new Date(2022,7,14);

    //difference btw both dates
    var currentTime = now.getTime();
    var eventTime = countDate.getTime();

    //difTime will get time into ms
    var difTime = eventTime - currentTime;

    //converting ms into sec,min
    //math floor get integer near to decimal value
    var sec = Math.floor(difTime / 1000);
    var min = Math.floor(sec / 60);
    var hours = Math.floor(min / 60);
    var day = Math.floor(hours / 24);

    hours%=24;
    min%=60;
    sec%=60;

    hours = (h <10) ? "0"+hours: hours;
    min = (min <10) ? "0"+min: min;
    sec = (sec <10) ? "0"+sec: sec;

    var d = document.getElementById('days').innerText = day
    var h = document.getElementById('hours').innerText ="0"+ hours
    var m = document.getElementById('mins').innerText = min
    var s = document.getElementById('sec').innerText =sec

    setTimeout(countDown , 1000);
}
countDown()