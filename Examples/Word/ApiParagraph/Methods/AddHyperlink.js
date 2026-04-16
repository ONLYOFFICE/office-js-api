// Add a hyperlink to a paragraph in a document.

// How to create a hyperlink and add it to the paragraph in a document.

// Add a paragraph hyperlink in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("ONLYOFFICE Document Builder");
paragraph.AddElement(run);
paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic", "docbuilder");