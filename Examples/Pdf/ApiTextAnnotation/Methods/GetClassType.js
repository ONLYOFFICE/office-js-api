// Find out the class type of a text annotation object in a PDF document.

// How can I get the class type of a text annotation in a PDF document?

// Get the class type of a text annotation and display it in the PDF.

let doc = Api.GetDocument();
let textAnnot = Api.CreateTextAnnot([10, 10, 20, 20]);
let classType = textAnnot.GetClassType();
textAnnot.SetContents(classType);
let page = doc.GetPage(0);
page.AddObject(textAnnot);
console.log(`Annot class type is: ${classType}`);