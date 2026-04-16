// Select the text on the page and return it.

// How to get selected text for a page?

// Get selected text and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
page.SetSelection({x: 10, y: 10}, {x: 100, y: 100});
console.log(`The selected text is: ${page.GetSelectedText()}`);