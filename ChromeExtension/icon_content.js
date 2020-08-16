console.log("CONTENT SCRIPT RUN");
var script = document.createElement("script");
const logoUrl = chrome.extension.getURL("logo.png");
script.text = `
const flerg = document.createElement("div");
flerg.style="position: fixed; bottom:0px; right:0px";
flerg.innerHTML = "<a href='https://www.google.com?voice_search=true' target='_blank'><img width='150' height='150' src='${logoUrl}'></a>";
document.documentElement.appendChild(flerg);
`;
(document.head || document.documentElement).appendChild(script);
