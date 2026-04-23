// Insert an element into a paragraph in a PDF.

// How do I add items to a paragraph in a PDF?

// Place a new element at a specific position in a paragraph in a PDF.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);

let richContent = freeTextAnnot.GetContent();
let para = richContent.GetElement(0);
let newRun = Api.CreateRichRun();
newRun.AddText("New run element");
para.AddElement(newRun, 0);

console.log("We added new rich run element to rich paragraph");