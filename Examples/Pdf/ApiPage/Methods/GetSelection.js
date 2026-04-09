// This example gets the current selection on the page.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
page.SetSelection({ start: { x: 10, y: 10 }, end: { x: 100, y: 100 } });
let selection = page.GetSelection();
console.log('Selection start - x: ' + selection.start.x + ', y: ' + selection.start.y);
console.log('Selection end - x: ' + selection.end.x + ', y: ' + selection.end.y);
