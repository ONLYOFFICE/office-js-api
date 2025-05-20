// This example shows how to insert an attribute into a custom XML node.
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example'></content>");
let insertionSuccess = xml.InsertAttribute("/content", "version", "1.0");
let paragraph = Api.CreateParagraph();
paragraph.AddText("XML string representation: " + xml.GetXml());
doc.Push(paragraph);