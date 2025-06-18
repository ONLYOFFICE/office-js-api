// This example sets vertical aligment "superscript" for [ApiRange](../ApiRange.md).

// How to set vertical alignment of a text.

// Get a range, specify its vertical alignment as "baseline", "subscript" or "superscript".

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Copyright Document Builder");
let range = doc.GetRange(10, 19);
range.SetVertAlign("superscript");