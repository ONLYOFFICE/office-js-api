// Set the bold property to the text character in a document.

// How to make a range text bold in a document.

// Update text properties of the range in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
range.SetBold(true);