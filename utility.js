
function fillCookie(fam, giv) {
    document.getElementById("name1_main").value = getCookie(giv);
    document.getElementById("name2_main").value = getCookie(fam);
}

function acc() {
        var str = "Practitioner ID:";
        document.getElementById("acc_id").innerHTML = str + getCookie("practitionerId");
    }