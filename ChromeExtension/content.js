console.log("CONTENT SCRIPT RUN");
var script = document.createElement("script");
script.text = `
console.log('INJECTED SCRIPT RUN');
if (document.location.href.includes('?voice_search=true')) {
  console.log('VOICE SEARCH RUN');
  document.querySelector("div[aria-label='Search by voice']").click();
}
`;

(document.head || document.documentElement).appendChild(script);
