// Identify the category of a redaction mark in a PDF.

// How do I determine what kind of annotation a redaction is in a PDF?

// Check the object type of a redaction element in a PDF.

let doc = Api.GetDocument();
let redactAnnot = Api.CreateRedactAnnot([84, 60, 231, 70]);
let page = doc.GetPage(0);
page.AddObject(redactAnnot);
console.log(`Annot class type is: ${redactAnnot.GetClassType()}`);