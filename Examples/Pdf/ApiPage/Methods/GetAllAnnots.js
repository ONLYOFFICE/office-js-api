// Retrieve all marked comments and notes from a page in a PDF.

// How do I access all the annotations in a PDF?

// List every comment attached to the current page in a PDF.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);

let annots = page.GetAllAnnots();
annots[0].SetPosition({x: 30, y: 30});