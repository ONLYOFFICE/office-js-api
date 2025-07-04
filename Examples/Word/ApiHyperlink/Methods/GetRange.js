// This example shows how to get a Range object that represents the document part contained in the specified hyperlink.

// Get the range where the hyperlink is located.

// Make the hyperlink range bold.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Api Document Builder");
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
let range = hyperlink.GetRange(0, 2);
range.SetBold(true);