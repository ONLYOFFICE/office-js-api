// Check the class type returned by a custom XML part in a document.

// How do I check what type a custom XML part object is in a document?

// Retrieve and output the class type string for a custom XML part in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example' version='1.0'></content>");
let classType = xml.GetClassType();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);