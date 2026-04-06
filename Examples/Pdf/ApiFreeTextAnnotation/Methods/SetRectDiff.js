// This example sets rect diff to freeText annotation.
let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetRectDiff([10, 10, 10, 10]);
console.log(`Annot rect diff is: ${freeTextAnnot.GetRectDiff()}`);