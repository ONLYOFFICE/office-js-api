// This example demonstrates how to delete a custom XML part.
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add('<content xmlms="http://example">1</content>');
let xml2 = xmlManager.Add('<content xmlms="http://example">1</content>');
xml.Delete();
let xmls = xmlManager.GetAll();
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Count of xml: " + xmls.length);
doc.Push(infoParagraph);