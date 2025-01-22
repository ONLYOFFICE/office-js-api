// This example sets verlical aligment "superscript" for [ApiRange](../ApiRange.md).
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Copyright Document Builder");
let range = doc.GetRange(10, 19);
range.SetVertAlign("superscript");