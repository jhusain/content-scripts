console.log("CONTENT SCRIPT RUN");
var script = document.createElement("script");
const logoUrl = chrome.extension.getURL("logo.svg");
const size = 150;
script.text = `
const flerg = document.createElement("div");
flerg.style="position: fixed; bottom:0px; right:0px";
flerg.innerHTML = "<a href='${logoUrl}' target='_blank'><img width='${size}' height='${size}' src='${logoUrl}'></a>";
document.documentElement.appendChild(flerg);
document.documentElement.style['margin-bottom']= '${size}px';
`;
(document.head || document.documentElement).appendChild(script);
