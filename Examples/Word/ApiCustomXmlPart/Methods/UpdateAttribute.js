// Update the value of an attribute in a custom XML node in a document.

// How can I update attribute using a custom XML part in a document?

// Update attribute for a custom XML part in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example' version='1.0'></content>");
xml.UpdateAttribute("/content", "version", "2.0");
let version = xml.GetAttribute("/content", "version");
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Xml string representaion: " + xml.GetXml());
doc.Push(infoParagraph);