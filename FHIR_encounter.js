function verify() {
    var urL = "http://hapi.fhir.org/baseDstu3/Patient?organization=1945183&&given:exact=";
    var given = document.getElementById("given").value;
    var family = document.getElementById("family").value;
    if (given != "" && family != "") {
        urL = urL + given + "&&family=" + family;
        getData(urL, 1);
    } else
        alert("Please enter something");
}

function end_encounter(conditionCode) {
    var text = {
        "resourceType": "Encounter",
        "status": "finished",
        "subject": {
            "reference": "Patient/1946203"
        },
        "participant": [{
            "individual": {
                "reference": "Practitioner/1948103"
            }
        }],
        "class": {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            "code": "AMB"
        },
        "reasonCode": [{
            "coding": [{
                "system": "http://snomed.info/sct",
                "code": "18099001"
            }]
        }],
        "diagnosis": [{
            "condition": {
                "reference": "Condition/1958741"
            }
        }],
        "period": {
            "start": "2019-05-17T13:39:34.464Z"
        },
        "location": [{
            "location": {
                "display": "Renal Nursing Room"
            },
            "status": "active",
            "period": {
                "start": "2017-02-01T07:15:00+10:00",
                "end": "2017-02-01T07:15:00+10:00"
            }
        }],
        "serviceProvider": {
            "reference": "Organization/jonah"
        }
    };
    text.subject.reference = "Patient/" + getCookie("patientId");
    text.participant[0].individual.reference = "Practitioner/" + document.getElementById("pid").value;
    text.class.code = document.getElementById("encounter_class").value;
    text.reasonCode[0].coding.code = document.getElementById("encounter_reason").value;
    text.location[0].period.start = document.getElementById("start_time").value;
    text.location[0].period.end = period_start();
    text.diagnosis[0].condition.reference = "Condition/" + conditionCode;

    var myJSON = JSON.stringify(text);
    HTTPPostData("http://hapi.fhir.org/baseDstu3/Encounter", myJSON, 0);
}

/*
function start_encounter() {
	var str = period_start();
	return str;
}
*/

function conditionData(code) {
    var text = {
        "resourceType": "Condition",
        "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"></div>"
        },
        "clinicalStatus": "active",
        "verificationStatus": "confirmed",
        "code": {
            "coding": [{
                "system": "https://browser.ihtsdotools.org/?perspective=full&conceptId1=109006&edition=en-edition&release=v20190131&server=https://prod-browser-exten.ihtsdotools.org/api/snomed&langRefset=900000000000509007",
                "code": "235595009"
            }]
        },
        "recorder": {
            "reference": "Practitioner/1948103"
        },
        "period": {
            "start": "2017-02-01T07:15:00+10:00",
            "end": "2017-02-01T07:15:00+10:00"
        },
        "subject": {
            "reference": "Patient/1958607"
        },
        "participant": [{
            "individual": {
                "reference": "Practitioner/1948103"
            }
        }]
    };
    text.code.coding[0].code = code;
    text.subject.reference = "Patient/" + getCookie("patientId");
    text.recorder.reference = "Practitioner/" + document.getElementById("pid").value;
    text.period.start = document.getElementById("start_time").value;
    end_str = period_start();
    text.period.end = end_str;
    var myJSON = JSON.stringify(text);
    HTTPPostData("http://hapi.fhir.org/baseDstu3/Condition", myJSON, 1);
}


function shuttle(ret) {
    var text = JSON.parse(ret);
    conditionCode = text.id;
    end_encounter(conditionCode);
}

function setCookie_PatientId() {
    var text = JSON.parse(ret);
    if (text.total == 0)
        alert("Not in the system");
    else {
        id = text.entry[0].resource.id;
        setCookie("patientId", id, 1);
        period_start();
        //document.getElementById("hide").innerHTML = "<button type= 'button' id='button2' onclick='end_encounter()'>Click here if mone of the following risk are true</button>";

        string = '<table align="center" border="1" cellspacing="10" cellpadding="2" style="width:100%;height:45%;"><tr><td colspan="2" align="center"><h2><b>Risk: </b></h2></td></tr>';
        string += '<tr><td style="width:50%;"><p><b>Chronic Diabetes: &nbsp; </b><button type="button" id="button1" name="condition" onclick="conditionData(73211009);">Yes</button>';
        string += '</p></td><td><p><b>Chronic Hypertension: &nbsp; </b><button type="button" id="button2" name="condition" onclick="conditionData(38341003);">Yes</button>';
        string += '</p></td></tr><tr><td><p><b>More than 65 Years Old: &nbsp; </b><button type="button" id="button3" name="condition" onclick="conditionData(271872005);">Yes</button>';
        string += '</p></td><td><p><b>Family History Of CKD Stage 5: &nbsp; </b><button type="button" id="button4" name="condition" onclick="conditionData(430560006);">Yes</button>';
        string += '</p></td></tr><tr><td><p><b>Cardiovascular Disease: &nbsp; </b><button type="button" id="button5" name="condition" onclick="conditionData(49601007);">Yes</button>';
        string += '</p></td><td style="width:50%;"><p><b>Structural Renal Tract Disease, Renal Calculi: &nbsp; </b><button type="button" id="button6" name="condition" onclick="conditionData(95570007);">Yes</button>';
        string += '</p></td></tr><tr><td><p><b>Opportunistic( Incidental ) Detection Of Hematuria: &nbsp; </b><button type="button" id="button7" name="condition" onclick="conditionData(34436003);">Yes</button>';
        string += '</p></td><td><p><b>Chronic Use Of NSAID Or Other Nephrotoxic Drugs: &nbsp; </b><button type="button" id="button8" name="condition" onclick="conditionData(16403005);">Yes</button>';
        string += '</p></td></tr><tr><td><p><b>Multisystem_D With Potential Kidney Involvement: &nbsp; </b><button type="button" id="button9" name="condition" onclick="conditionData(57653000);">Yes</button>';
        string += '</p></td><td></td></tr></table>';
        document.getElementById("hide_table").innerHTML = string;
    }
}