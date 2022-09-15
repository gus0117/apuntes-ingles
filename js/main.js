function ajaxGetJson() {
    let hr = new XMLHttpRequest();
    hr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            data = JSON.parse(this.response);
            formatToTable(data);
        }
    }
    hr.open("GET", "../data/verbs.json");
    hr.send();
}

function formatToTable(data){
    let tBody = document.getElementById('li-data');
    //console.log(Object.keys(data["verbs"]));
    for(let i = 0; i < Object.keys(data["verbs"]).length; i++){
        tBody.innerHTML = tBody.innerHTML + "<tr><td>" + data["verbs"][i]["inf"] + "</td> <td>" + data["verbs"][i]["ps"] + "</td> <td>" + data["verbs"][i]["pp"] + "</td> <td>" + data["verbs"][i]["es"] + "</td> </tr>";
    }
}

ajaxGetJson();