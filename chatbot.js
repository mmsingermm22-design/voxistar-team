function openChat(){
    document.getElementById("chatWindow").style.display="block";
}

function closeChat(){
    document.getElementById("chatWindow").style.display="none";
}


function sendMessage(){

let input = document.getElementById("userInput").value.toLowerCase();

let reply = "";


/* Founder */
if(
input.includes("founder") ||
input.includes("owner") ||
input.includes("ceo")
){
reply =
"Voxistar ke founder Mukesh Heerani hain. Woh Hyderabad, Sindh, Pakistan se hain. Unka vision ek aisa platform banana hai jahan creators aur talent ko grow karne ke opportunities mil sakein.";
}


/* About Voxistar */
else if(
input.includes("voxistar") ||
input.includes("app") ||
input.includes("what is voxistar")
){
reply =
"Voxistar ek modern creator and talent management platform hai. Iska purpose creators ko connect karna, talent ko support karna aur digital entertainment experience ko improve karna hai.";
}


/* App Features */
else if(
input.includes("feature") ||
input.includes("use") ||
input.includes("work")
){
reply =
"Voxistar creators, users aur talent community ke liye ek organized platform provide karta hai jahan entertainment, creativity aur management tools ko ek jagah laya jata hai.";
}


/* Official Team */
else if(
input.includes("team") ||
input.includes("official")
){
reply =
"Voxistar ki official management team global level par kaam karti hai. Different countries me local officials ho sakte hain, jabke main management team platform operations ko handle karti hai.";
}


/* Account Delete */
else if(
input.includes("delete") ||
input.includes("removed") ||
input.includes("ban")
){
reply =
"Agar kisi user ki Voxistar ID delete, disabled ya restricted ho gayi hai to user ko apni account details verify karni chahiye aur official Voxistar support team se contact karna chahiye.";
}


/* Hack Security */
else if(
input.includes("hack") ||
input.includes("security") ||
input.includes("stolen")
){
reply =
"Agar account security issue ya hacking ka doubt ho to password change karein, apni personal information share na karein aur official Voxistar support channel ke through help lein.";
}


/* Login */
else if(
input.includes("login") ||
input.includes("password") ||
input.includes("otp")
){
reply =
"Login problem ke liye account recovery options check karein. OTP ya password kisi ke sath share na karein. Zaroorat par official support team se contact karein.";
}


/* Support */
else if(
input.includes("contact") ||
input.includes("help") ||
input.includes("support")
){
reply =
"Voxistar support ke liye official contact channels use karein. Team users ke questions aur platform related issues ko resolve karne me madad karti hai.";
}


/* Privacy */
else if(
input.includes("privacy") ||
input.includes("data")
){
reply =
"Voxistar users ki privacy aur data protection ko important samajhta hai. Users ko apni personal information secure rakhni chahiye.";
}


/* Greeting */
else if(
input.includes("hello") ||
input.includes("hi")
){
reply =
"Hello! Main Voxi AI Assistant hoon. Aap Voxistar app, founder, team ya support se related questions pooch sakte hain.";
}


/* Other */
else{
reply =
"Main Voxi AI Assistant hoon. Main sirf Voxistar app, founder, official team, account security aur support se related questions ka jawab de sakta hoon.";
}



document.getElementById("messages").innerHTML +=
"<p><b>You:</b> "+input+"</p>"+
"<p><b>Voxi AI:</b> "+reply+"</p>";


document.getElementById("userInput").value="";

}
