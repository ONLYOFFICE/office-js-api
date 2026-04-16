// Add a hyperlink to the run in a document.

// How to add a link to the text in a document.

// Insert a hyperlink to the run indicating its link and title in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("ONLYOFFICE Document Builder");
paragraph.AddElement(run);
run.AddHyperlink("https://www.onlyoffice.com", "main page");