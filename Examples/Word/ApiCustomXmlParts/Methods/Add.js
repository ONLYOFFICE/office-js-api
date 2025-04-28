// This example shows how to add a new custom XML part and then access it.
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let newXml = xmlManager.Add('<content xmlms="http://example" version="1.0"></content>');
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("New XML part added: " + newXml.GetXml());
doc.Push(infoParagraph);