// Get a Range object that represents the document part contained in the specified hyperlink in a document.

// Get the range where the hyperlink is located in a document.

// Make the hyperlink range bold in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Api Document Builder");
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
let range = hyperlink.GetRange(0, 2);
range.SetBold(true);