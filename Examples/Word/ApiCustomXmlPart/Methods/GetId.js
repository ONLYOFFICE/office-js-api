// This example shows how to retrieve the ID of a custom XML part.
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add('<content xmlns="http://example"></content>');
let xmlId = xml.GetId();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Custom XML ID: " + xmlId);
doc.Push(paragraph);