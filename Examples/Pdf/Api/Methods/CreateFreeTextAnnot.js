// Create a freeText annotation and add it to the page.

// How do I create the free text annot in a PDF document?

// Create the free text annot and display the result in a PDF document.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);