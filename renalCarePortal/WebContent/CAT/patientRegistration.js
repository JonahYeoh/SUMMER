/**
 * http://usejsdoc.org/
 */

 var gender = () => {
    return document.getElementById("gender").value;
}


var contactValue = () => {
    return document.getElementById("telecomContact").value;
}


function patientPost() {
	console.log("Patient Registration Started");
    var status = true;
    var text = {
        "resourceType": "Patient",
        "id": "ax98234",
        "text": {
            "status": "generated"
        },
        "identifier": [{
                "use": "usual",
                "type": {
                    "coding": [{
                        "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                        "code": "MR"
                    }]
                },
                "assigner": {
                    "display": "Health Care for Christ"
                },
                "value": "003"
            },
            {
                "use": "official",
                "type": {
                    "text": "random",
                    "coding": [{
                        "system": "https://www.ris.gov.tw/app/en/3051",
                        "code": "PPN"
                    }]
                },
                "assigner": {
                    "display": "Department Of Household Registration"
                },
                "system": "https://www.ris.gov.tw/app/en/3051",
                "value": "AX9001234"
            },
            {
                "use": "official",
                "type": {
                    "coding": [{
                        "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                        "code": "NIIP"
                    }]
                },
                "assigner": {
                    "display": "Ministry Of Health Taiwan"
                },
                "system": "https://www.mohw.gov.tw/mp-2.html",
                "value": "1234"
            }
        ],
        "active": "true",
        "name": [{
                "use": "official",
                "family": "",
                "given": [
                    ""
                ],
                "prefix": "mr",
                "text": ""
            },
            {
                "use": "official",
                "family": "",
                "given": [
                    ""
                ],
                "text": ""
            },
            {
                "use": "official",
                "family": "",
                "given": [
                    ""
                ],
                "text": ""
            }
        ],
        "telecom": [{
                "system": "phone",
                "value": "",
                "use": "mobile"
            },
            {
                "system": "email",
                "value": "",
                "use": "home"
            },
            {
                "system": "email",
                "value": "",
                "use": "home"
            }
        ],
        "gender": "male",
        "maritalStatus": {
            "coding": [{
                "system": "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
                "code": "M"
            }]
        },
        "contact": [{
            "relationship": "N",
            "name": [{
                "use": "official",
                "family": "",
                "given": [
                    ""
                ],
                "text": ""
            }],
            "telecom": [{
                "system": "phone",
                "value": ""
            }],
            "gender": "male"
        }],
        "communication": [{
                "language": {
                    "coding": [{
                        "system": "urn:ietf:bcp:47",
                        "code": "zh-TW",
                        "display": "Chinese (Taiwan)"
                    }]
                },
                "preferred": false
            },
            {
                "language": {
                    "coding": [{
                        "system": "urn:ietf:bcp:47",
                        "code": "",
                        "display": ""
                    }]
                },
                "preferred": false
            }
        ],
        "birthDate": "1974-12-25",
        "deceasedBoolean": "false",
        "address": [{
                "use": "home",
                "text": "demo",
                "line": [
                    "demo"
                ],
                "city": "demo",
                "postalCode": "99999"
            },
            {
                "use": "work",
                "text": "demo",
                "line": [
                    "demo"
                ],
                "city": "demo",
                "postalCode": "demo"
            }
        ],
        "extension": [{
            "url": "http://hl7.org/fhir/registry",
            "extension": [{
                "url": "http://terminology.hl7.org/CodeSystem/v3-Race",
                "valueCodeableConcept": {
                    "coding": [{
                        "system": "http://terminology.hl7.org/CodeSystem/v3-Race",
                        "code": "1002-5"
                    }]
                }
            }]
        }],
        "managingOrganization": {
            "reference": "Organization/jonah"
        }
    }
	// Organization/jonah
    if ((text.id = document.getElementById("nid").value) == '')
        return 0;
    text.identifier[0].value = "emr" + document.getElementById("nid").value;
    text.identifier[1].value = document.getElementById("nid").value;
    if ((text.identifier[2].value = document.getElementById("wid").value) == '')
        return 0;

    if ((text.name[0].given[0] = document.getElementById("given").value) != '') {
        text.name[0].prefix = document.getElementById("title").value;
        text.name[0].given[0] = document.getElementById("given").value;
    } else
        return 0;

    text.name[1].given[0] = document.getElementById("givenTaiwan").value;

    if ((text.name[2].given[0] = document.getElementById("givenSimplified").value) != '') {
        text.name[2].given[0] = document.getElementById("givenSimplified").value;
    }

    if ((text.telecom[0].value = document.getElementById("telecom0").value) == '')
        return 0;
    text.telecom[1].value = document.getElementById("telecom1").value;
    text.telecom[2].value = document.getElementById("telecom2").value;

    text.gender = gender();

    text.maritalStatus.coding[0].code = document.getElementById("marital").value;

    if (document.getElementById("lang0y").checked)
        text.communication[0].preferred = true;
    if (document.getElementById("communicationLanguage").value != '----') {
        text.communication[1].preferred = true;
        text.communication[1].language.coding[0].code = document.getElementById("communicationLanguage").value;
    }

    if (contactValue() != '') {
        text.contact[0].relationship = document.getElementById("contact").value;
        text.contact[0].name[0].given[0] = document.getElementById("givenContact").value;
        text.contact[0].telecom[0].value = document.getElementById("telecomContact").value;
        text.contact[0].gender = document.getElementById("genderContact").value;
    } else {
        text.contact[0] = "";
        status = false;
    }

    x = document.getElementById("year").value;
    y = document.getElementById("fhirmonth").value;
    z = document.getElementById("fhirday").value;
    text.birthDate = x + "-" + y + "-" + z;

    if (document.getElementById("addLine").value != '') {
        text.address[0].line[0] = document.getElementById("addLine").value;
        text.address[0].city = document.getElementById("addCity").value;
        text.address[0].postalCode = document.getElementById("addPostal").value;
        i = document.getElementById("addLine").value;
        j = document.getElementById("addCity").value;
        k = document.getElementById("addPostal").value;
        l = document.getElementById("addCountry").value;
        text.address[0].text = i + ", " + j + ", " + k + ", " + l;
    } else {
        alert("Field missing");
        status = false;
    }

    if (document.getElementById("addLineW").value != '') {
        text.address[1].line[0] = document.getElementById("addLineW").value;
        text.address[1].city = document.getElementById("addCityW").value;
        text.address[1].postalCode = document.getElementById("addPostalW").value;
        i = document.getElementById("addLineW").value;
        j = document.getElementById("addCityW").value;
        k = document.getElementById("addPostalW").value;
        l = document.getElementById("addCountryW").value;
        text.address[1].text = i + ", " + j + ", " + k + ", " + l;
    } else
        text.address[1] = "";

    text.extension[0].extension[0].valueCodeableConcept.coding[0].code = document.getElementById("raceList").value;

    if (status == true) {
        var myJSON = JSON.stringify(text);
        //var url = "http://192.168.174.128:8080/hapi-fhir-jpaserver-example/baseDstu3/Patient/" + text.id;
        var url = "http://hapi.fhir.org/baseDstu3/Patient/" + text.id;
		HTTPPutData(url, myJSON, "patient");
		console.log("Successed");
    } else {
		alert("Operation Failed");
		console.log("Failed Operation");
	}
}