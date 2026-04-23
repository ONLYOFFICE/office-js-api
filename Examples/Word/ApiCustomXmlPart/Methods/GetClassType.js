// Get the class type of a custom XML part in a document.

// How do I identify what kind of object a custom XML part is in a document?

// Verify the object type before performing type-specific operations in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example' version='1.0'></content>");
let classType = xml.GetClassType();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);