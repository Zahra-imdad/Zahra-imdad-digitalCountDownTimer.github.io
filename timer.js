function countDown(){
    let now = new Date();
    //7 is august here index is taken
    let countDate = new Date(2022,7,14);

    //difference btw both dates
    let currentTime = now.getTime();
    let eventTime = countDate.getTime();

    //difTime will get time into ms
    let difTime = eventTime - currentTime;

    //converting ms into sec,min
    //math floor get integer near to decimal value
    let sec = Math.floor(difTime / 1000);
    let min = Math.floor(sec / 60);
    let hours = Math.floor(min / 60);
    let day = Math.floor(hours / 24);

    hours%=24;
    min%=60;
    sec%=60;

    hours = (h <10) ? "0"+hours: hours;
    min = (min <10) ? "0"+min: min;
    sec = (sec <10) ? "0"+sec: sec;

    const d = document.getElementById('days').innerText = day
    var h = document.getElementById('hours').innerText ="0"+ hours
    const m = document.getElementById('mins').innerText = min
    const s = document.getElementById('sec').innerText =sec

    setTimeout(countDown , 1000);
}
countDown()