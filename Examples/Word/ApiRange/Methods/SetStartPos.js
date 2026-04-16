// Set the start position of a given range object in a document.

// How to change the starting index of the range in a document.

// Resize the range by setting new start position in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = paragraph.GetRange();
range.SetStartPos(12);
range.SetBold(true);