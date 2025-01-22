// This example shows how to get a Range object that represents the document part contained in the specified range.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range1 = doc.GetRange(0, 24);
range1.SetBold(true);
let range2 = range1.GetRange(0, 9);
range2.SetItalic(true);