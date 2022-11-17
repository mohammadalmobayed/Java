async function getData(){
    const response =await fetch("https://www.breakingbadapi.com/api/characters")
    const data =await response.json();
    console.log(response);
    console.log(data);
    var table=`<table border = 2px>`
    table+="<tr>";
    table+="<th>"+"Name"+"</th>"
    table+="<th>"+"Nick Name"+"</th>"
    table+="<th>"+"Image"+"</th>"
    table+="</th>"
    data.map((ele)=>{
        table+= "<tr>";
        table+="<td>"+ele.name+"</td>"
        table+="<td>"+ele.nickname+"</td>"
        table+="<td>"+`<img src=${ele.img}`+"</td>"
        table+="</tr>";

    })

    table+="</table>"
    document.getElementById("data").innerHTML=table;

}
function ClearData(){
    document.getElementById("data").innerHTML="";
}