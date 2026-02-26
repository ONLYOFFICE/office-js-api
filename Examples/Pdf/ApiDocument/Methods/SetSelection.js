// This example selects the text on the first page in document.
let doc = Api.GetDocument();
doc.SetSelection(0, {x: 10, y: 10}, 0, {x: 100, y: 100});
console.log('We selected the text on the page');