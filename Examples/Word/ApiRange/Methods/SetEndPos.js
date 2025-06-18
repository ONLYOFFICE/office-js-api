// This example sets the end position of a given range object.

// Get the end index of the range and display it.

// Retrieve a range of the paragraph and show its last position.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = paragraph.GetRange();
range.SetEndPos(12);
range.SetBold(true);