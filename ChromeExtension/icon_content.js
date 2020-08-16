console.log("CONTENT SCRIPT RUN");
var script = document.createElement("script");
const logoUrl = chrome.extension.getURL("logo.png");
script.text = `
const navButton = document.createElement("div");
navButton.style="position: fixed; bottom:0px; right:0px";
navButton.innerHTML = "<a href='https://www.google.com?voice_search=true' target='_blank'><img width='200' height='200' src='${logoUrl}'></a>";
document.appendChild(navButton);
`;
(document.head || document.documentElement).appendChild(script);
