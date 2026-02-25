// This example gets all annots from page.
let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);

let annots = page.GetAllAnnots();
annots[0].SetPosition({x: 30, y: 30});
