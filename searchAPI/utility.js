var changeQueryCount = () => {
    var result = parseInt(document.getElementById("queryQtt").innerHTML) + 1;
    document.getElementById("queryQtt").innerHTML = result;
    return result;
};
var getResourceType = () => {
    var type = document.getElementById("resourceType").value;
    return type;
};

// SEARCH API
var observationAPI = new Array('_id', '_language', 'based-on', 'category', 'code', 'code-value-concept', 'code-value-date', 'code-value-quantity', 'code-value-string', 'combo-code', 'combo-code-value-concept', 'combo-code-value-quantity', 'combo-data-absent-reason', 'combo-value-concept', 'combo-value-quantity', 'component-code', 'component-code-value-concept', 'component-code-value-quantity', 'component-data-absent-reason', 'component-value-concept', 'component-value-quantity', 'data-absent-reason', 'date', 'derived-from', 'device', 'encounter', 'focus', 'has-member', 'identifier', 'method', 'part-of', 'patient', 'performer', 'specimen', 'status', 'subject', 'value-concept', 'value-date', 'value-quantity', 'value-string');
var practitionerAPI = new Array('_id', '_language', 'active', 'adderss', 'address-city', 'address-country', 'address-postalcode', 'address-state', 'address-use', 'communication', 'email', 'family', 'gender', 'given', 'identifier', 'name', 'phone', 'phonetic', 'telecom');
var patientAPI = new Array('_id', '_lastUpdated', 'active', 'address', 'address-city', 'address-postalcode', 'address-state', 'address-use', 'birthdate', 'death-date', 'deceased', 'email', 'family', 'given', 'gender', 'general-practitioner', 'identifier', 'language', 'link', 'name', 'organization', 'phone', 'phonetic', 'telecom');
var encounterAPI = new Array('_id', '_language', 'account', 'appointment', 'based-on', 'class', 'date', 'diagnosis', 'episode-of-care', 'identifier', 'length', 'location', 'location-period', 'part-of', 'participant', 'participant-type', 'patient', 'practitioner', 'reason-code', 'reason-reference', 'service-provider', 'special-arrangement', 'status', 'subject', 'type');
// END OF SEARCH API

function addRow(tableID) {
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;
    if (rowCount <= 4) {
        //var lastRow = table.rows[rowCount - 1];
        var row = table.insertRow(rowCount);
        var colCount = table.rows[1].cells.length;
        for (var i = 0; i < colCount - 1; i++) {
            var newCell = row.insertCell(i);
            newCell.innerHTML = table.rows[1].cells[i].innerHTML;
        }
        changeQueryCount();
    } else
        alert("也太長了吧？");
}

function openURL(tag) {
    var url = document.getElementById(tag).value;
    if (url != "") {
        console.log(url);
        window.open(url, "frameOne");
    } else
        alert("沒有符合格式的URL可用");
}

function loadParameter() {
    console.log("you have touched the resourceType");
    var resource = document.getElementById("resourceType").value;
    if (resource != "----") {
        if (resource == "Patient")
            load(patientAPI);
        else if (resource == "Practitioner")
            load(practitionerAPI);
        else if (resource == "Encounter")
            load(encounterAPI);
        console.log("Success");
    } else
        console.log("Stay Put");
}
// how do I make load content according to steps without button???

function load(resource) {
    // destination id="searchParameter"
    var optionList = document.getElementById("searchParameter");
    for (var i = 0; i < resource.length; i++) {
        var opt = document.createElement("option");
        opt.value = resource[i];
        opt.innerHTML = resource[i];
        optionList.appendChild(opt);
    }
    console.log("loaded " + resource);
}

function captureQuery(tableID, index) {
    var queryDetails = { "par": "", "tuner": "", "value": "" };
    var className = document.getElementsByName('parameter')[index].value;
    var tuner = document.getElementsByName('prefix')[index].value;
    if (tuner == "----") {
        tuner = document.getElementsByName('modifiers')[index].value;
        if (tuner == "----")
            tuner = "";
    }
    queryDetails.par = className;
    queryDetails.tuner = tuner;
    queryDetails.value = document.getElementsByName('val')[index].value;
    console.table(queryDetails);
    return queryDetails;
}

function urlGenerator(tableID) {
    var i;
    var url = "http://hapi.fhir.org/baseDstu3/";
    var board = document.getElementById("outputPane");
    var queryQtt = parseInt(document.getElementById('queryQtt').innerHTML);
    //console.log(queryQtt);

    url += getResourceType();
    url += "?";
    for (i = 0; i < queryQtt; i++) {
        if (queryQtt > 0) {
            var result = captureQuery(tableID, i);
            url += result.par;
            if (result.tuner != "") {
                url += result.tuner;
            }
            url += "=";
            url += result.value;
            if (i != queryQtt - 1)
                url += "&";
        }
    }
    board.value = url;
    return url;
}