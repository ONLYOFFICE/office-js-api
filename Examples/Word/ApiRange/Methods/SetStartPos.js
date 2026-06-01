// Move the beginning of a text selection to a different position in a document.

// How do I change where a text range starts without altering where it ends in a document?

// Trim or expand the leading edge of a selected region to cover a different set of words in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = paragraph.GetRange();
range.SetStartPos(12);
range.SetBold(true);