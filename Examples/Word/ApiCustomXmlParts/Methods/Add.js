// Add a new custom XML part and then access it in a document.

// How to add for a custom XML parts in a document?

// Add and display the result in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let newXml = xmlManager.Add("<content xmlns='http://example' version='1.0'></content>");
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("New XML part added: " + newXml.GetXml());
doc.Push(infoParagraph);