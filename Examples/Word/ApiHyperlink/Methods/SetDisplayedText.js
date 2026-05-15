// Set the displayed text of a hyperlink in a document.

// How do I change the visible label of a hyperlink in a document?

// Replace the default link text with a custom readable name in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("ONLYOFFICE Document Builder");
paragraph.AddElement(run);
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
hyperlink.SetDisplayedText("Api ONLYOFFICE DocBuilder");