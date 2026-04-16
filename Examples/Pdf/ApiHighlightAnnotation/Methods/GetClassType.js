// Find out the class type of a highlight annotation object in a PDF document.

// How can I get the class type of a highlight annotation in a PDF document?

// Get the class type of a highlight annotation and display it in the PDF.

let doc = Api.GetDocument();
let highlightAnnot = Api.CreateHighlightAnnot([84, 55, 231, 72]);
let page = doc.GetPage(0);
page.AddObject(highlightAnnot);
console.log(`Annot class type is: ${highlightAnnot.GetClassType()}`);