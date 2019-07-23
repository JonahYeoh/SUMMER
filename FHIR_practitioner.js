function practitionerPost() {
    var text =
    {
        "resourceType": "Practitioner",
        "id":"",
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
                }
            },
			{
                "use": "official",
                "type": {
                    "coding": [
                      {
                          "system": "https://www.ris.gov.tw/app/en/3051"
                      }
                    ]
                },
                "assigner": {
                    "display": "Department Of Household Registration"
                },
				"system":"https://www.ris.gov.tw/app/en/3051",
				"value":"AX9001234"
            },
			{
                "use": "official",
                "type": {
                    "coding": [
                      {
                          "system": "https://www.mohw.gov.tw/mp-2.html"
                      }
                    ]
                },
                "assigner": {
                    "display": "Ministry Of Health Taiwan"
                },
				"system":"https://www.mohw.gov.tw/mp-2.html",
				"value":"1234"
            }
        ],
        "active": "true",
        "name": [
            {
                "family": "demo",
                "given": [
                    "demo"
                ]
            },
			{
				"text":"約翰"
			}
        ],
        "telecom": [
            {
                "system": "phone",
                "value": "999",
                "use": "work"
            },
			{
                "system": "email",
                "value": "demo@gmail.com",
                "use": "work"
            }
        ],
        "gender": "male",
        "birthDate": "1974-12-25",
        "address": [
            {
                "use": "home",
                "text": "demo",
                "line": [
                    "demo"
                ],
                "city": "demo",
                "postalCode": "99999"
            }
        ],
        "qualification": [
            {
                "identifier":
                    {
                        "use": "official",
                        "assigner": {
                            "display": "Healing University Of Medicine"
                        }
                    },
                "code": {
                    "coding": [
                      {
                          "system": "http://terminology.hl7.org/CodeSystem/v2-0360/2.7",
                          "code": "BS"
                      }
                    ]
                },
                "period": {
                    "start": "1995"
                }
            }
        ]
    }
    text.identifier[0].type.coding[0].code = document.getElementById("title").value;
	text.identifier[1].value = document.getElementById("nid").value;
    text.identifier[2].value = document.getElementById("wid").value;
    text.id = document.getElementById("nid").value;
    text.name[0].family = document.getElementById("family").value;
    text.name[0].given[0] = document.getElementById("given").value;
	text.name[1].text = document.getElementById("mandrinName").value;
    text.telecom[0].use = document.getElementById("contactP").value;
	text.telecom[0].value = document.getElementById("telecomP").value;
	text.telecom[1].use = document.getElementById("contactE").value;
	text.telecom[1].value = document.getElementById("telecomE").value;
	text.gender = document.getElementById("gender").value;
    x = document.getElementById("year").value;
    y = document.getElementById("fhirmonth").value;
    z = document.getElementById("fhirday").value;
    text.birthDate = x + "-" + y + "-" + z;
    text.qualification[0].identifier.assigner.display = document.getElementById("university").value;
    text.qualification[0].code.coding[0].code = document.getElementById("highestEducationLevel").value;
    text.qualification[0].period.start = document.getElementById("graduatedSince").value;
    text.address[0].line[0] = document.getElementById("addLine").value;
    text.address[0].city = document.getElementById("addCity").value;
    text.address[0].postalCode = document.getElementById("addPostal").value;
    i = document.getElementById("addLine").value;
    j = document.getElementById("addCity").value;
    k = document.getElementById("addPostal").value;
    l = document.getElementById("addCountry").value;
    text.address[0].text = i + ", " + j + ", " + k + ", " + l;

    var myJSON = JSON.stringify(text);
    var url = "http://hapi.fhir.org/baseDstu3/Practitioner/" + text.id;
    //HTTPPostData("http://hapi.fhir.org/baseDstu3/Patient", myJSON, "patient");
    HTTPPutData(url, myJSON, "practitioner");
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