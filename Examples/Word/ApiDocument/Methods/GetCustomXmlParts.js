// Get the custom XML manager, add a new XML part, and retrieve it by its ID in a document.

// How can I get custom xml parts using a document in a document?

// Get custom xml parts for a document in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = "<content><text>Example XML</text></content>";
let xmlPart = xmlManager.Add(xmlText);
let xmlId = xmlPart.GetId();
let retrievedXml = xmlManager.GetById(xmlId);
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Retrieved XML: " + retrievedXml.GetXml());
doc.Push(infoParagraph);