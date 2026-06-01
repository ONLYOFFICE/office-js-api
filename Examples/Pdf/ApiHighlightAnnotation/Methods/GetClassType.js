// Determine the type of a highlight annotation in a PDF.

// What class type does a highlight annotation have in a PDF?

// Check the object classification for a highlight annotation in a PDF.

let doc = Api.GetDocument();
let highlightAnnot = Api.CreateHighlightAnnot([84, 55, 231, 72]);
let page = doc.GetPage(0);
page.AddObject(highlightAnnot);
console.log(`Annot class type is: ${highlightAnnot.GetClassType()}`);