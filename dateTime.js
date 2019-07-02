function checkTime(i) {
    if (i < 10)
        i = "0" + i;  // add zero in front of numbers < 10
    return i;
} // end function

function period_start() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    date = today.getDate();
    month = today.getMonth() + 1;
    date = checkTime(date);
    month = checkTime(month);
    year = today.getFullYear();
    dateString = year + "-" + month + "-" + date + "T" + h + ":" + m + ":" + s + ".000Z";
    document.getElementById('start_time').value = dateString;
    return dateString;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    date = today.getDate();
    month = today.getMonth() + 1;
    date = checkTime(date);
    month = checkTime(month);
    year = today.getFullYear();
    dateString = year + "-" + month + "-" + date + "T" + h + ":" + m + ":" + s + ".000Z";
    document.getElementById('dateTime').innerHTML = dateString;
    var t = setTimeout(startTime, 500);
} // end function