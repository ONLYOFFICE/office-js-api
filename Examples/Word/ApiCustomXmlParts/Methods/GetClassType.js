// Check the class type returned by a custom XML parts in a document.

// How do I check what type a custom XML parts object is in a document?

// Retrieve and output the class type string for a custom XML parts in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let classType = xmlManager.GetClassType();
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Class type: " + classType);
doc.Push(infoParagraph);