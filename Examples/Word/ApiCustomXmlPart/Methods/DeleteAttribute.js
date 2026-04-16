// Delete attribute from custom XML part in a document.

// How can I delete the attribute using a custom XML part in a document?

// Delete the attribute for a custom XML part in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example' version='1.0'></content>");
let deletionSuccess = xml.DeleteAttribute('/content', 'version');
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Xml string representation: " + xml.GetXml());
doc.Push(infoParagraph);