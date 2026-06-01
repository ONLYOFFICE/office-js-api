// Add a new attribute to an XML node in a custom XML part in a document.

// How do I attach an attribute to an existing XML element in a document?

// Extend an XML node with extra metadata by inserting a named attribute in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example'></content>");
let insertionSuccess = xml.InsertAttribute("/content", "version", "1.0");
let paragraph = Api.CreateParagraph();
paragraph.AddText("XML string representation: " + xml.GetXml());
doc.Push(paragraph);