function GetProjectNameFromUrlParams()
{
    const urlParams = new URLSearchParams(window.location.search);
    const projName = urlParams.get('projName');
    return projName;
}

async function ReadJson(){
    var responce = await fetch("./projectInfo/" + GetProjectNameFromUrlParams() + ".json");
    console.log(responce);
    const json = await responce.json();
    return json;
}


ReadJson().then(data => {
    document.getElementById("project-name").textContent = data.name;
    document.getElementById("project-status").textContent = data.status;
    document.getElementById("project-devs").textContent = data.devs;
    document.getElementById("project-text").textContent = data.text;
});