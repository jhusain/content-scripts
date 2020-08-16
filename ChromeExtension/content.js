console.log("CONTENT SCRIPT RUN");
var script = document.createElement("script");
script.text = `
if (document.location.href.includes('?voice_search=true')) {
  document.querySelector("div[aria-label='Search by voice']").click();
}
`;

(document.head || document.documentElement).appendChild(script);
