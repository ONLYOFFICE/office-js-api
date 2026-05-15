// Add a redaction annotation to a PDF page.

// How do I mark content for permanent removal in a PDF?

// Create a redaction area that obscures text or content in a PDF.

let doc = Api.GetDocument();
let redactAnnot = Api.CreateRedactAnnot([[85.04985826771654,56.70000000000001,229.27237795275593,56.70000000000001,85.04985826771654,70.9988031496063,229.27237795275593,70.9988031496063]]);
let page = doc.GetPage(0);
page.AddObject(redactAnnot);