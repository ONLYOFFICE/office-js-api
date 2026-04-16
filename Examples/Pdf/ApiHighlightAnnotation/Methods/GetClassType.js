// Retrieve the class type of a highlight annotation in a PDF document.

// How to identify the class type of a highlight annotation in a PDF document?

// Obtain the class type identifier of a highlight annotation object in a PDF document.

let doc = Api.GetDocument();
let highlightAnnot = Api.CreateHighlightAnnot([84, 55, 231, 72]);
let page = doc.GetPage(0);
page.AddObject(highlightAnnot);
console.log(`Annot class type is: ${highlightAnnot.GetClassType()}`);