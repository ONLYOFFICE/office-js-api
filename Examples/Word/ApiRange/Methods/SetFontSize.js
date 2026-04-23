// Change the text size for a range of characters in a document.

// How do I make a section of text larger or smaller in a document?

// Resize the letters in a chosen portion of text to stand out or fit better in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
range.SetFontSize(14);