// Set the ending style of a callout line in a PDF.

// Customize the endpoint marker of a free text callout annotation.

// Apply a square line ending and verify the resulting style.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);
freeTextAnnot.SetEndStyle("square");
console.log(`End style set to: ${freeTextAnnot.GetEndStyle()}`);
