// Add a text box annotation to a PDF.

// How do I add a free text annotation in a PDF?

// Display a note with text content in a PDF.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);