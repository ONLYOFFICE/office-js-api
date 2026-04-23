// Read the URL address stored in a hyperlink in a document.

// How do I get the destination URL of a hyperlink in a document?

// Retrieve the updated link target after changing the hyperlink address in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("ONLYOFFICE Document Builder");
paragraph.AddElement(run);
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
hyperlink.SetLink("https://api.onlyoffice.com/");
let linkedText = hyperlink.GetLinkedText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Linked text: " + linkedText);
doc.Push(paragraph);