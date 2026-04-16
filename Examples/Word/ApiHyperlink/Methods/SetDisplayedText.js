// Set the hyperlink display text in a document.

// How to specify the hyperlink text that is displayed in a document.

// Set the visible text of the link in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("ONLYOFFICE Document Builder");
paragraph.AddElement(run);
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
hyperlink.SetDisplayedText("Api ONLYOFFICE DocBuilder");