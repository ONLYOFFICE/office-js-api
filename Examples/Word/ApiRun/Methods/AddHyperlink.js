// This example adds a hyperlink to the run.

// How to add a link to the text.

// Insert a hyperlink to the run indicating its link and title.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("ONLYOFFICE Document Builder");
paragraph.AddElement(run);
run.AddHyperlink("https://www.onlyoffice.com", "main page");