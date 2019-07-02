var xmlHttp = new XMLHttpRequest(); 
var ret;

function HTTPGetData(urlStr, option) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", urlStr, true);
    rawFile.setRequestHeader("Content-type", "application/json+fhir");
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            ret = rawFile.responseText;
            loginVerification(ret, option); // loginVerification.js
        }
    }
    rawFile.send();
}

function getData(urlStr, option) {
    HTTPGetData(urlStr,option);
}
