var xmlHttp = new XMLHttpRequest(); 
var ret;

//取得網路上的資源
function HTTPGetData(urlStr, option) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", urlStr, true);
    rawFile.setRequestHeader("Content-type", "application/json+fhir");
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            ret = rawFile.responseText;
            alert("data retrieved");
            getVerification(ret, option);
            if (option == "practitioner")
                practitionerRole();
        }
    }
    rawFile.send();
}

//上傳 dataStr 到網路上
function HTTPPostData(urlStr, dataStr, option ) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("POST", urlStr, true);
    rawFile.setRequestHeader("Content-type", "application/json+fhir");
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            ret = rawFile.responseText;
            alert("One");
            postVerification(ret, option);
            
        }
    }
    rawFile.send(dataStr);
}

function getData(urlStr, option) {
    HTTPGetData(urlStr, option);
}


