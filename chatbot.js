function sendMessage() {

let input = document.getElementById("userInput").value.toLowerCase();
let chat = document.getElementById("chatBox");

chat.innerHTML += `<p><b>You:</b> ${input}</p>`;

let reply = "";


if(input.includes("voxistar") || input.includes("app")) {

reply = `
Voxistar is a modern creator and talent management platform.
It combines the experience of platforms like StarMaker, TikTok, and Instagram
into one connected ecosystem where creators can showcase talent,
build communities, and grow professionally.
`;

}


else if(input.includes("founder") || input.includes("owner") || input.includes("created")) {

reply = `
The founder of Voxistar is Mukesh Heerani.
He is from Hyderabad, Sindh, Pakistan and is working towards building
a professional platform for creators, talent, and digital communities.
`;

}


else if(input.includes("team") || input.includes("official")) {

reply = `
Voxistar has an official management team responsible for operations,
growth, and platform development.

Voxistar officials are available in different countries to support
their local communities, while the main management team handles
the overall platform direction.
`;

}


else if(input.includes("feature") || input.includes("service")) {

reply = `
Voxistar focuses on:
• Creator and talent management
• Digital community building
• Content and entertainment support
• Professional growth opportunities
• Connecting creators worldwide
`;

}


else if(input.includes("mission") || input.includes("vision")) {

reply = `
Voxistar's mission is to create a global platform where creators,
talents, and communities can connect, grow, and achieve success
through technology and teamwork.
`;

}


else if(input.includes("contact") || input.includes("email")) {

reply = `
You can contact Voxistar officially through:
voxistarmanagement@gmail.com
`;

}


else if(input.includes("assistant") || input.includes("name")) {

reply = `
I am Voxistar Assistant, the official virtual assistant of Voxistar.
I can help you with information about Voxistar, its app, team,
services, and official details.
`;

}


else {

reply = `
Sorry, I can only answer questions related to Voxistar,
Voxistar app, official team, founder, and services.
`;

}


chat.innerHTML += `<p><b>Voxistar Assistant:</b> ${reply}</p>`;

document.getElementById("userInput").value = "";

}
