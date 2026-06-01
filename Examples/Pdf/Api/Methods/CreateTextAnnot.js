// Add a text annotation to a page in a PDF.

// How do I add a text annotation to a PDF?

// Create and insert a text annotation at specified coordinates in a PDF.

let doc = Api.GetDocument();
let textAnnot = Api.CreateTextAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(textAnnot);