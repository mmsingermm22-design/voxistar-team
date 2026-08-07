function openChat(){
    document.getElementById("chatWindow").style.display="block";
}

function closeChat(){
    document.getElementById("chatWindow").style.display="none";
}

function sendMessage(){

    let input = document.getElementById("userInput").value.toLowerCase();
    let reply = "Sorry, mujhe is sawal ka jawab nahi pata.";

    if(input.includes("voxistar")){
        reply = "Voxistar ek creator aur talent platform hai.";
    }

    else if(input.includes("founder")){
        reply = "Voxistar ka founder ke bare me information available hai.";
    }

    else if(input.includes("contact")){
        reply = "Aap Voxistar ke official contact channels use kar sakte hain.";
    }

    document.getElementById("chatMessages").innerHTML +=
    "<p><b>You:</b> "+input+"</p>" +
    "<p><b>Voxi AI:</b> "+reply+"</p>";

    document.getElementById("userInput").value="";
}
