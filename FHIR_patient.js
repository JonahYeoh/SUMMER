var gender = () => {
    return document.getElementById("gender").value;
}
var contactValue = () => {
    return document.getElementById("telecomContact").value;
}
function patientPost() {
    var status = true;
    var text =
    {
        "resourceType": "Patient",
        "id": "ax98234",
        "text": {
            "status": "generated"
        },
        "identifier": [
            {
                "use": "usual",
                "type": {
                    "coding": [
                        {
                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                            "code": "MR"
                        }
                    ]
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
                    "coding": [
                        {
                            "system": "https://www.ris.gov.tw/app/en/3051",
                            "code": "PPN"
                        }
                    ]
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
                    "coding": [
                        {
                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                            "code": "NIIP"
                        }
                    ]
                },
                "assigner": {
                    "display": "Ministry Of Health Taiwan"
                },
                "system": "https://www.mohw.gov.tw/mp-2.html",
                "value": "1234"
            }
        ],
        "active": "true",
        "name": [
            {
                "use": "official",
                "family": "",
                "given": [
                    "34r"
                ],
                "prefix": "mr",
                "text": "abcd king"
            },
            {
                "use": "official",
                "family": "",
                "given": [
                    "34r"
                ],
                "text": ""
            },
            {
                "use": "official",
                "family": "",
                "given": [
                    "34r"
                ],
                "text": ""
            }
        ],
        "telecom": [
            {
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
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
                    "code": "M"
                }
            ]
        },
        "contact": [
            {
                "relationship": "N",
                "name": [
                    {
                        "use": "official",
                        "family": "aqecd",
                        "given": [
                            "qeng"
                        ],
                        "text": "aqecd qeng"
                    }
                ],
                "telecom": [
                    {
                        "system": "phone",
                        "value": "234567"
                    }
                ],
                "gender": "male"
            }
        ],
        "communication": [
            {
                "language": {
                    "coding": [
                        {
                            "system": "urn:ietf:bcp:47",
                            "code": "zh-TW",
                            "display": "Chinese (Taiwan)"
                        }
                    ]
                },
                "preferred": false
            },
            {
                "language": {
                    "coding": [
                        {
                            "system": "urn:ietf:bcp:47",
                            "code": "zh-CN",
                            "display": "Chinese (China)"
                        }
                    ]
                },
                "preferred": false
            },
            {
                "language": {
                    "coding": [
                        {
                            "system": "urn:ietf:bcp:47",
                            "code": "en-US",
                            "display": "English (United States)"
                        }
                    ]
                },
                "preferred": false
            }
        ],
        "birthDate": "1974-12-25",
        "deceasedBoolean": "false",
        "address": [
            {
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
        "managingOrganization": {
            "reference": "Organization/1945183"
        }
    }

    if ((text.id = document.getElementById("nid").value) == '')
        return 0;
    text.identifier[0].value = "emr" + document.getElementById("nid").value;
    text.identifier[1].value = document.getElementById("nid").value;
    if ((text.identifier[2].value = document.getElementById("wid").value) == '')
        return 0;

    if ((text.name[0].family = document.getElementById("family").value) != '' || (text.name[0].given[0] = document.getElementById("given").value) != '') {
        text.name[0].prefix = document.getElementById("title").value;
        text.name[0].given[0] = document.getElementById("given").value;
        text.name[0].text = text.name[0].family + " " + text.name[0].given[0];
    }
    else
        return 0;

    text.name[1].family = document.getElementById("familyTaiwan").value;
    text.name[1].given[0] = document.getElementById("givenTaiwan").value;
    text.name[1].text = text.name[1].family + " " + text.name[1].given[0];

    if ((text.name[2].family = document.getElementById("familySimplified").value) != '' || (text.name[2].given[0] = document.getElementById("givenSimplified").value) != ''){
        text.name[2].given[0] = document.getElementById("givenSimplified").value;
        text.name[2].text = text.name[2].family + " " + text.name[2].given[0];
    }

    if ((text.telecom[0].value = document.getElementById("telecom0").value) == '')
        return 0;
    text.telecom[1].value = document.getElementById("telecom1").value;
    text.telecom[2].value = document.getElementById("telecom2").value;

    text.gender = gender();

    text.maritalStatus.coding[0].code = document.getElementById("marital").value;

    if (document.getElementById("lang0y").checked)
        text.communication[0].preferred = true;
    if (document.getElementById("lang1y").checked)
        text.communication[1].preferred = true;
    if (document.getElementById("lang2y").checked)
        text.communication[2].preferred = true;

    if (contactValue() != '') {
        text.contact[0].relationship = document.getElementById("contact").value;
        text.contact[0].name[0].family = document.getElementById("familyContact").value;
        text.contact[0].name[0].given[0] = document.getElementById("givenContact").value;
        text.contact[0].name[0].text = text.contact[0].name[0].family + " " + text.contact[0].name[0].given[0];
        text.contact[0].telecom[0].value = document.getElementById("telecomContact").value;
        text.contact[0].gender = document.getElementById("genderContact").value;
    }
    else
        text.contact[0] = "";

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
    }
    else {
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
    }
    else
        text.address[1] = "";

    if (status == true) {
        var myJSON = JSON.stringify(text);
        var url = "http://hapi.fhir.org/baseDstu3/Patient/" + text.id;
        HTTPPutData(url, myJSON, "patient");
    }
    else
        alert("Operation Failed");

}