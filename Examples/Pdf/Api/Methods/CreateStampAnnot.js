// Add an approval stamp annotation to a PDF page.

// How do I mark a document with a stamp in a PDF?

// Place a preset stamp at specified coordinates in a PDF.

let doc = Api.GetDocument();
let stampAnnot = Api.CreateStampAnnot([40, 40, 100, 100], 'SB_Approved');
let page = doc.GetPage(0);
page.AddObject(stampAnnot);