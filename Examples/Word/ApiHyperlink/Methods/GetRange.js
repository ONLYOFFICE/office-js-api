// Obtain a text range that spans part of a hyperlink in a document.

// How do I select a portion of a hyperlink as a range in a document?

// Apply bold formatting to a subset of hyperlink characters using a range in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Api Document Builder");
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
let range = hyperlink.GetRange(0, 2);
range.SetBold(true);