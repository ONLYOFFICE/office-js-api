// This example specifies that any lowercase characters in the current text Range are formatted for display only as their capital letter character equivalents.

// How to make range text uppercase.

// Update text letters of the range by converting them to capital letters.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(10, 17);
range.SetCaps(true);