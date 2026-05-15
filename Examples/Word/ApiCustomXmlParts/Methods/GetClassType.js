// Identify the class type of a custom XML parts manager in a document.

// How do I get the class type of a custom XML parts object in a document?

// Confirm the object kind before calling type-specific operations on the XML manager in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let classType = xmlManager.GetClassType();
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Class type: " + classType);
doc.Push(infoParagraph);