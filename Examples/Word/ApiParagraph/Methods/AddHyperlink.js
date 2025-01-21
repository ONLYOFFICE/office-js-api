// This example adds a hyperlink to a paragraph.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
let run = Api.CreateRun();
run.AddText("ONLYOFFICE Document Builder");
paragraph.AddElement(run);
paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic", "docbuilder");