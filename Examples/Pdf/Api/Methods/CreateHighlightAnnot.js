// Create a highlight annotation and add it to the page.

// Create the highlight annot in a PDF document.

// Create the highlight annot using the PDF document API.

let doc = Api.GetDocument();
let highlightAnnot = Api.CreateHighlightAnnot([[85.04985826771654,56.70000000000001,229.27237795275593,56.70000000000001,85.04985826771654,70.9988031496063,229.27237795275593,70.9988031496063]]);
let page = doc.GetPage(0);
page.AddObject(highlightAnnot);