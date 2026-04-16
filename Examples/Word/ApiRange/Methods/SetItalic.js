// Set the italic property to the text character in a document.

// How to make a range text italic in a document.

// Create a range, change its properties by making it italic in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
range.SetItalic(true);