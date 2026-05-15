// Adjust where a text range ends by setting its last character position in a document.

// How do I change the ending boundary of a selected text range in a document?

// Shorten or extend a range by moving its closing edge to a new position in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = paragraph.GetRange();
range.SetEndPos(12);
range.SetBold(true);