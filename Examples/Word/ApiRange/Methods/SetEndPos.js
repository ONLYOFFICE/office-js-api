// Set the end position of a given range object in a document.

// Get the end index of the range and display it in a document.

// Retrieve a range of the paragraph and show its last position in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = paragraph.GetRange();
range.SetEndPos(12);
range.SetBold(true);