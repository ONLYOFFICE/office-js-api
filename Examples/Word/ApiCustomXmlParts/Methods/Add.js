// Attach a new custom XML part to a document.

// How do I add a custom XML part with specific content to a document?

// Embed structured XML data into a document to store metadata alongside the content in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let newXml = xmlManager.Add("<content xmlns='http://example' version='1.0'></content>");
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("New XML part added: " + newXml.GetXml());
doc.Push(infoParagraph);