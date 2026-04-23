// Read the value of a named attribute from an element in embedded XML data in a document.

// How do I get the value of a specific attribute from an XML element stored in a document?

// Extract a metadata value from structured XML so it can be displayed or validated in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example' version='1.0'></content>");
let version = xml.GetAttribute("/content", "version");
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("The version attribute is: " + version);
doc.Push(infoParagraph);