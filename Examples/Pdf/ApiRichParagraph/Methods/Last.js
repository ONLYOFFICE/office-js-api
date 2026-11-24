// Get the final element from a paragraph in a PDF.

// How do I access the last element in a paragraph in a PDF?

// Obtain the bottom-most item from a paragraph in a PDF.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);

let richContent = freeTextAnnot.GetContent();
let para = richContent.GetElement(0);
para.GetElement(0).AddText("First run");
const second = Api.CreateRichRun();
second.AddText("Last run");
para.Push(second);
console.log(para.Last().GetText());