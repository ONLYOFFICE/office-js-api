// Retrieve the class type of a custom XML parts in a document.

// How to identify the class type of a custom XML parts in a document?

// Obtain the class type identifier of a custom XML parts object in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let classType = xmlManager.GetClassType();
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Class type: " + classType);
doc.Push(infoParagraph);