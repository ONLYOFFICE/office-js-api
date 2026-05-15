// Read the visible label of a hyperlink in a document.

// How do I get the text that is shown for a hyperlink in a document?

// Confirm what words a reader sees when a hyperlink is rendered in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
let displayedText = hyperlink.GetDisplayedText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Displayed text: " + displayedText);
doc.Push(paragraph);