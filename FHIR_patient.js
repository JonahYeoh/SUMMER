function patientPost() {
    var text =
    {
        "resourceType": "Patient",
        "id":"1234567",
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
            }
        ],
        "managingOrganization": {
			"reference": "Organization/1945183"
        }
    }
	text.identifier[0].type.coding[0].code = document.getElementById("title").value;
	text.identifier[1].value = document.getElementById("nid").value;
	text.identifier[2].value = document.getElementById("wid").value;
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
    
    text.address[0].line[0] = document.getElementById("addLine").value;
    text.address[0].city = document.getElementById("addCity").value;
    text.address[0].postalCode = document.getElementById("addPostal").value;
    i = document.getElementById("addLine").value;
    j = document.getElementById("addCity").value;
    k = document.getElementById("addPostal").value;
    l = document.getElementById("addCountry").value;
    text.address[0].text = i + ", " + j + ", " + k + ", " + l;

    var myJSON = JSON.stringify(text);
    HTTPPostData("http://hapi.fhir.org/baseDstu3/Patient", myJSON, "patient");
}
