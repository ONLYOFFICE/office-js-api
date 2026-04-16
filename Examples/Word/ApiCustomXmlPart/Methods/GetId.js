// Retrieve the ID of a custom XML part in a document.

// How do I get the id in a document?

// Get the id using a custom XML part object in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example'></content>");
let xmlId = xml.GetId();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Custom XML ID: " + xmlId);
doc.Push(paragraph);