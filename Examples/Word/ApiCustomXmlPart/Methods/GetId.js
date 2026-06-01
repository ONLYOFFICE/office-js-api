// Read the unique identifier of a custom XML part in a document.

// How do I get the ID assigned to a custom XML part in a document?

// Store or reference a custom XML part by its ID for later lookup in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example'></content>");
let xmlId = xml.GetId();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Custom XML ID: " + xmlId);
doc.Push(paragraph);