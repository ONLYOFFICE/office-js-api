// This example shows how to get the custom XML manager, add a new XML part, and retrieve it by its ID.
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = '<content><text>Example XML</text></content>';
let xml = xmlManager.Add(xmlText);
let xmlId = xml.id;
let retrievedXml = xmlManager.GetById(xmlId);
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Retrieved XML: " + retrievedXml.GetXml());
doc.Push(infoParagraph);