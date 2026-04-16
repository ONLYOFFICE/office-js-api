// Get intent of freeText annotation in a PDF document.

// How do I get the intent in a PDF document?

// Get the intent using a free text annotation object in a PDF document.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetRectDiff([1, 1, 1, 1]);
console.log(`Annot intent is: ${freeTextAnnot.GetIntent()}`);