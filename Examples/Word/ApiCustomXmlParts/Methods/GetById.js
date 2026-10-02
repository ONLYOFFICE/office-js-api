// Find a custom XML part by its ID in a document.

// How do I get a specific custom XML part using its identifier in a document?

// Read the XML content of the part returned for a given ID in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = "<content xmlns='http://example.com'><text>Example XML</text></content>";
let xmlPart = xmlManager.Add(xmlText);
let foundPart = xmlManager.GetById(xmlPart.GetId());
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("XML part: " + foundPart.GetXml());
doc.Push(infoParagraph);