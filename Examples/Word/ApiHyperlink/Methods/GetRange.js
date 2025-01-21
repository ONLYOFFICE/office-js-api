// This example shows how to get a Range object that represents the document part contained in the specified hyperlink.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("Api Document Builder");
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
let range = hyperlink.GetRange(0, 2);
range.SetBold(true);