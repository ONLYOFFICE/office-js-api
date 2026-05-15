// Determine the type of a text annotation in a PDF.

// How do I check what class a text annotation belongs to in a PDF?

// Identify the object type of an annotation comment in a PDF.

let doc = Api.GetDocument();
let textAnnot = Api.CreateTextAnnot([10, 10, 20, 20]);
let classType = textAnnot.GetClassType();
textAnnot.SetContents(classType);
let page = doc.GetPage(0);
page.AddObject(textAnnot);
console.log(`Annot class type is: ${classType}`);