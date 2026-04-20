// Set vertical alignment "superscript" for a text range.

// Set the vertical alignment of a text in a document.

// Get a range, specify its vertical alignment as "baseline", "subscript" or "superscript" in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Copyright Document Builder");
let range = doc.GetRange(10, 19);
range.SetVertAlign("superscript");