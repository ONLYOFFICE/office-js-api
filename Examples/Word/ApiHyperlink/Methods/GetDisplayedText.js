// This example shows how to get the hyperlink display text.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
let displayedText = hyperlink.GetDisplayedText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Displayed text: " + displayedText);
document.Push(paragraph);