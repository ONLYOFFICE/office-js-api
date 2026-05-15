// Remove a specific attribute from an element in embedded XML data in a document.

// How do I strip an unwanted attribute from an XML element stored in a document?

// Clean up obsolete metadata on an element without altering the rest of the XML in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example' version='1.0'></content>");
let deletionSuccess = xml.DeleteAttribute('/content', 'version');
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Xml string representation: " + xml.GetXml());
doc.Push(infoParagraph);