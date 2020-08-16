var script = document.createElement("script");
script.text = `document.querySelector("div[aria-label='Search by voice']").click();`;
(document.head || document.documentElement).appendChild(script);
