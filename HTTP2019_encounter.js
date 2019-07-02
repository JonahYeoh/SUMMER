var xmlHttp = new XMLHttpRequest(); 
var ret;
var conditionCode = 0;

//取得網路上的資源
function HTTPGetData(urlStr, option) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", urlStr, true);
    rawFile.setRequestHeader("Content-type", "application/json+fhir");
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            ret = rawFile.responseText;
            //alert("data retrieved");
            alert(ret);
            var text = JSON.parse(ret);
            if (text.total == 0)
                alert("Sorry");
            else {
                if (option == 1) {
                    alert("Welcome");
                    setCookie_PatientId();
                }
            }
        }
        
    }
    rawFile.send();
}

//上傳 dataStr 到網路上
function HTTPPostData(urlStr, dataStr, indicator) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("POST", urlStr, true);
    rawFile.setRequestHeader("Content-type", "application/json+fhir");
  
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            ret = rawFile.responseText;
            alert(ret);
            if (indicator == 1)
                shuttle(ret);
        }
    }
    rawFile.send(dataStr);
}

function getData(urlStr,option) {
    HTTPGetData(urlStr,option);
}

function HTTPPutData(urlStr, dataStr) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("PUT", urlStr, true);
    rawFile.setRequestHeader("Content-type", "application/json+fhir");

    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4)
            ret = rawFile.responseText;
    }
    rawFile.send(dataStr);
}