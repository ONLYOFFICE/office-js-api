// Retrieve all marked comments and notes from a page in a PDF.

// Useful for accessing all the annotations in a PDF.

// List every comment attached to the current page in a PDF.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([10, 10, 160, 32]);
doc.AddPage();
let page = doc.GetPage(doc.GetPagesCount() - 1);
page.AddObject(freeTextAnnot);

let annots = page.GetAllAnnots();
annots[annots.length - 1].SetPosition({x: 30, y: 30});
