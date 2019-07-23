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
			alert(ret);
            var status = getVerification(ret, option);
            if (option == "practitionerRole" && status == 1)
				bypass();
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
            alert(ret);
            postVerification(ret,option);            
        }
    }
    rawFile.send(dataStr);
}

function getData(urlStr, option) {
    HTTPGetData(urlStr, option);
}

function HTTPPutData(urlStr, dataStr, option) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("PUT", urlStr, true);
    rawFile.setRequestHeader("Content-type", "application/json+fhir");

    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4){
            ret = rawFile.responseText;
            postVerification(ret,option); 
            alert(ret);
        }
    }
    rawFile.send(dataStr);
}
