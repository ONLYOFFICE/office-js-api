// Access a specific element inside a hyperlink by its index in a document.

// How do I retrieve one element from a hyperlink using its position in a document?

// Extract a run from a hyperlink to reuse its content elsewhere in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run1 = Api.CreateRun();
run1.AddText("Api Document Builder.");
paragraph.AddElement(run1, 0);
let run2 = Api.CreateRun();
run2.AddText(" ONLYOFFICE for developers");
paragraph.AddElement(run2, 1);
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
let element = hyperlink.GetElement(1);
paragraph = Api.CreateParagraph();
paragraph.AddText("Element text: " + element.GetText());
doc.Push(paragraph);