function populate(s1,s2){
    var s1=document.getElementById(s1);
    var s2=document.getElementById(s2);
    s2.innerHTMl="";
    if(s1.value=="Haier"){
        var optionArray=["haier HS18T-NMW3B 1.5 Ton 3 Star S|Haier HS18T-NMW3B 1.5 Ton 3 Star S","haier HSU12T-TFW3B 1 Ton 3 Star Sp|Haier HSU12T-TFW3B 1 Ton 3 Star Sp","ha2|Ha2","ha3|Ha3"];
    }
    else if(s1.value=="Voltas"){
        var optionArray=["vo4|Vo4","vo1|Vo1","vo2|Vo2","vo3|Vo3"];
    }
    else if(s1.value=="abcd"){
        var optionArray=["a4|A4","a1|A1","a2|A2","a3|A3"];
    }
    else if(s1.value=="efgh"){
        var optionArray=["h4|H4","h1|H1","h2|H2","h3|H3"];
    }
    else if(s1.value=="bacd"){
        var optionArray=["ab4|Ab4","ab1|Ab1","ab2|Ab2","ab3|Ab3"];
    }

    for(var option in optionArray){
        var pair=optionArray[option].split("|");
        var newOption=document.createElement("option");
        newOption.value=pair[0];
        newOption.innerHTML=pair[1];
        s2.options.add(newOption);
    }
}


function auth(){
    var fname = document.getElementById("fname").value;
   var mobile = document.getElementById("mobile").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var pin = document.getElementById("pin").value;
    var state = document.getElementById("state").value;
    var defect = document.getElementById("defect").value;
    if(fname=='' && mobile==''&&address=='' && city==''&& pin=='' && state=='' && defect==''){
        alert("invalid information");
    }else{
        alert("login sucessfully");
        window.location.assign("/products");
    }
}