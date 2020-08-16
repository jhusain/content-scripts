console.log("CONTENT SCRIPT RUN");
var script = document.createElement("script");
const logoUrl = chrome.extension.getURL("logo.svg");
const size = 50;
script.text = `
const flerg = document.createElement("div");
flerg.style="position: fixed; bottom:50px; right:50px;z-index:99999;";
flerg.innerHTML = "<a href='https://www.google.com/?voice_search=true' target='_blank'><img width='${size}' height='${size}' src='${logoUrl}'></a>";
document.documentElement.appendChild(flerg);
`;
(document.head || document.documentElement).appendChild(script);
