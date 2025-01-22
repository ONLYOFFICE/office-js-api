// This example adds a hyperlink to a paragraph.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("ONLYOFFICE Document Builder");
paragraph.AddElement(run);
paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic", "docbuilder");