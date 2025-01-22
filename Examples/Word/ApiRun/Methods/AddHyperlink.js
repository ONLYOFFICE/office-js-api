// This example adds a hyperlink to the run.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("ONLYOFFICE Document Builder");
paragraph.AddElement(run);
run.AddHyperlink("https://www.onlyoffice.com", "main page");