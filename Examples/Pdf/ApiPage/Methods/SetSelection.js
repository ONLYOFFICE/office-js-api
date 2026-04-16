// Select the text on the page.

// How can I set selection using a page in a PDF document?

// Set selection for a page in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
page.SetSelection({x: 10, y: 10}, {x: 100, y: 100});
console.log('We selected the text on the page');