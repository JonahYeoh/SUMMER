function fillCookie(fam, giv) {
    document.getElementById("given").value = getCookie(giv);
    document.getElementById("family").value = getCookie(fam);
}

function acc() {
        var str = "Practitioner ID:";
        document.getElementById("acc_id").innerHTML = str + getCookie("practitionerId");
}
function loadArray(id){
			var month = ['month','January','February','March','April','May','June','July','August','September','October','November','December'];
			var day = ['day','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'];
			if ( id == "monthDOB" ){
				var m = month.length;
				var str = "<select id=\"fhir"+month[0]+"\" name=\"month\">";
				for ( i = 1; i < m; i++ ){
					if ( i <= 9 )
						str += "<option id=\"" + month[0] + i + "\" name=\"" + month[0] + "\">0" + i + "</option>";
					else
						str += "<option id=\"" + month[0] + i + "\" name=\"" + month[0] + "\">" + i + "</option>";
				}
				str += "</select>";
			}
			else if ( id=="dayDOB" ){
				var m = day.length;
				var str = "<select id=\"fhir"+day[0]+"\" name=\"day\" >";
				for ( i = 1; i < m; i++ )
					str += "<option id=\"" + day[0] + i + "\" name=\"" + day[0] + "\">" + day[i] + "</option>";
				str += "</select>";
			}
			document.getElementById(id).innerHTML = str;
}
