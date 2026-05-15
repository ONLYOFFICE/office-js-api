// Embed a custom XML part and retrieve it by its generated ID in a document.

// How do I add and look up custom XML data stored inside a document?

// Store structured XML payloads within a document and confirm they can be fetched back by identifier in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = "<content><text>Example XML</text></content>";
let xmlPart = xmlManager.Add(xmlText);
let xmlId = xmlPart.GetId();
let retrievedXml = xmlManager.GetById(xmlId);
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Retrieved XML: " + retrievedXml.GetXml());
doc.Push(infoParagraph);