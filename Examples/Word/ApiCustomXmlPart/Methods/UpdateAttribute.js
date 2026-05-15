// Change the value of an existing attribute in a custom XML part in a document.

// How do I update an attribute on an XML node within a custom XML part in a document?

// Modify stored metadata by overwriting an attribute value in place in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example' version='1.0'></content>");
xml.UpdateAttribute("/content", "version", "2.0");
let version = xml.GetAttribute("/content", "version");
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Xml string representaion: " + xml.GetXml());
doc.Push(infoParagraph);