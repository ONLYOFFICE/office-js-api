// Create a caret annotation and add it to the page.

// How do I create the caret annot in a PDF document?

// Create the caret annot and display the result in a PDF document.

let doc = Api.GetDocument();
let caretAnnot = Api.CreateCaretAnnot([[85.04985826771654,56.70000000000001,229.27237795275593,56.70000000000001,85.04985826771654,70.9988031496063,229.27237795275593,70.9988031496063]]);
let page = doc.GetPage(0);
page.AddObject(caretAnnot);